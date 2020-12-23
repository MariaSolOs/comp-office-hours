const { MongoDataSource } = require('apollo-datasource-mongodb');

module.exports = class Appointments extends MongoDataSource {
    async getAllAppointments() {
        const appts = await this.collection.find({
            isBooked: false
        }).toArray();
        return appts.map(appt => ({
                    instructor: appt.instructor,
                    student: appt.student, 
                    date: appt.date.toISOString().split('T')[0],
                    timeslot: appt.timeslot
                }));
    }
}