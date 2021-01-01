const { MongoDataSource } = require('apollo-datasource-mongodb'),
      { ObjectID } = require('mongodb');

module.exports = class Appointments extends MongoDataSource {
    apptReducer(appt) {
        return {
            ...appt,
            date: appt.date.toISOString().split('T')[0]
        }
    }

    async getAllAppointments() {
        const appts = await this.collection.find({})
                      .toArray();
        return appts.map(appt => this.apptReducer(appt));
    }

    async getAppointmentById(apptId) {
        const appt = await this.findOneById(ObjectID(apptId));
        return this.apptReducer(appt);
    }

    bookAppointment(apptId, userId) {
        return this.collection.updateOne(
            { _id: ObjectID(apptId) },
            { $set: { student: ObjectID(userId), isBooked: true } }
        );
    }
}