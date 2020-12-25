const jwt = require('jsonwebtoken'),
      { AuthenticationError } = require('apollo-server');

module.exports = {
    User: {
        __resolveType: (obj, _, __) => {
            if(obj.zoomLink) {
                return 'Instructor';
            }
            if(obj.mcgillId) {
                return 'Student';
            }
            return null;
        }
    },

    Query: {
        instructors: async (_, __, { dataSources }) => {
            const insts = await dataSources.instructorAPI.getAllInstructors();
            return insts;
        },

        appointments: async (_, { instId, date }, { dataSources }) => {
            const appts = await dataSources.appointmentAPI.getAllAppointments();
            return appts.filter(appt => (
                date === appt.date && instId === `${appt.instructor}`
            ));
        }
    },

    Mutation: {
        login: async (_, { email }, { dataSources }) => {
            const user = await dataSources.studentAPI.getStudent(email);
    
            if(!user) {
                throw new AuthenticationError('Email does not exist.');
            }
    
            const token = jwt.sign(
            { 
                userId: user.id, 
                email: user.email 
            },
            process.env.JWT_SECRET,
            { 
                expiresIn: '1h', 
                issuer: 'COMP202-OHBA' 
            });
            return { token };
        }
    }
}