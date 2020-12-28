const jwt = require('jsonwebtoken'),
      { AuthenticationError } = require('apollo-server');

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

    Query: {
        instructors: async (_, __, { dataSources, user }) => {
            if(!user) {
                throw new AuthenticationError('Not logged in');
            }

            const insts = await dataSources.instructorAPI.getAllInstructors();
            return insts;
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
            user = await dataSources.studentAPI.getStudent(email);
            if(!user) {
                user = await dataSources.instructorAPI.getInstructor(email);
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
                const appt = await dataSources.appointmentAPI.getAppointment(apptId);
                const student = await dataSources.studentAPI.getStudent(user.email);
                return {
                    ...appt,
                    student: { ...student }
                }
            } catch(error) {
                return new Error(`Booking failed: ${error}`);
            }
        }
    }
}