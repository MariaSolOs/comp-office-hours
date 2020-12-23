module.exports = {
    Query: {
        instructors: (_, __, { dataSources }) => {
            return dataSources.instructorAPI.getAllInstructors();
        },

        appointments: async (_, { instId, date }, { dataSources }) => {
            const appts = await dataSources.appointmentAPI.getAllAppointments();
            return appts.filter(appt => (
                date === appt.date && instId === `${appt.instructor}`
            ));
        }
    }
}