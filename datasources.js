const { MongoDataSource } = require('apollo-datasource-mongodb');

exports.Instructors = class Instructors extends MongoDataSource {
    async getAllInstructors() {
        const insts = await this.collection.find({}).toArray();
        return insts.map(inst => ({
            _id: inst._id,
            name: inst.name,
            zoomLink: inst.zoomLink,
            photo: inst.photo,
            role: inst.role,
            languages: inst.languages? inst.languages : [],
            availDays: Object.keys(inst.schedule)
        }));
    }

    getInstructor(email) {
        return this.collection.findOne({ email });
    }
}

exports.Students = class Students extends MongoDataSource {
    getStudent(email) {
        return this.collection.findOne({ email });
    }
}

exports.Appointments = class Appointments extends MongoDataSource {
    async getAllAppointments() {
        const appts = await this.collection.find({}).toArray();
        return appts.map(appt => ({
            _id: appt._id,
            instructor: appt.instructor,
            date: appt.date.toISOString().split('T')[0],
            timeslot: appt.timeslot,
            isBooked: appt.isBooked
        }));
    }
}