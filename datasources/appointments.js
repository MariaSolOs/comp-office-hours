const { MongoDataSource } = require('apollo-datasource-mongodb');

module.exports = class Appointments extends MongoDataSource {
    async getAllAppointments() {
        const appts = await this.collection.find({}).toArray();
        return appts.map(appt => ({
            id: appt._id,
            instructor: appt.instructor,
            date: appt.date.toISOString().split('T')[0],
            timeslot: appt.timeslot,
            isBooked: appt.isBooked
        }));
    }
}