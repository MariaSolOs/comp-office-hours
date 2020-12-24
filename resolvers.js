module.exports = {
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
    }
}