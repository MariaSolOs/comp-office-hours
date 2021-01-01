const jwt = require('jsonwebtoken'),
      { AuthenticationError } = require('apollo-server-express'),
      { sendEmailToStudent, sendEmailToInstructor } = require('./utils/email');

module.exports = {
    User: {
        __resolveType: (user, _, __) => {
            if(user.mcgillId) {
                return 'Student';
            }
            if(user.zoomLink) {
                return 'Instructor';
            }
            return null;
        }
    },

    Appointment: {
        instructor: (appt, _, { dataSources }) => {
            return dataSources.instructorAPI.getInstructorById(appt.instructor);
        },
        student: (appt, _, { dataSources }) => {
            if(appt.student) {
                return dataSources.studentAPI.getStudentById(appt.student);
            } else {
                return {};
            }
        }
    },

    Query: {
        instructors: (_, __, { dataSources, user }) => {
            if(!user) {
                throw new AuthenticationError('Not logged in');
            }

            return dataSources.instructorAPI.getAllInstructors();;
        },

        appointments: async (_, { instId, date }, { dataSources, user }) => {
            if(!user) {
                throw new AuthenticationError('Not logged in');
            }

            const appts = await dataSources.appointmentAPI.getAllAppointments();
            return appts.filter(appt => (
                date === appt.date && instId === `${appt.instructor}`
            ));
        }
    },

    Mutation: {
        login: async (_, { email }, { dataSources }) => {
            let user;
            user = await dataSources.studentAPI.getStudentByEmail(email);
            if(!user) {
                user = await dataSources.instructorAPI.getInstructorByEmail(email);
            }
            if(!user) {
                throw new AuthenticationError('Email does not exist.');
            }
    
            user.token = jwt.sign(
            { 
                _id: user._id, 
                email: user.email 
            },
            process.env.JWT_SECRET,
            { 
                expiresIn: '1h', 
                issuer: 'COMP202-OHBA' 
            });
            return user;
        },

        bookAppointment: async (_, { apptId }, { dataSources, user }) => {
            try {
                await dataSources.appointmentAPI.bookAppointment(apptId, user._id);

                const appt = await dataSources.appointmentAPI.getAppointmentById(apptId);
                const instructor = await dataSources.instructorAPI.getInstructorById(appt.instructor);
                const student = await dataSources.studentAPI.getStudentById(user._id);

                sendEmailToStudent(student.email, 
                                   instructor.name, 
                                   appt.date, 
                                   appt.timeslot, 
                                   instructor.zoomLink);
                sendEmailToInstructor(instructor.email,
                                      student.name,
                                      instructor.name,
                                      appt.date,
                                      appt.timeslot,
                                      instructor.zoomLink);

                return appt;
            } catch(err) {
                console.error(err);
                return new Error(`Booking failed: ${err}`);
            }
        }
    }
}