const { MongoDataSource } = require('apollo-datasource-mongodb'),
      { ObjectID } = require('mongodb');

exports.Instructors = class Instructors extends MongoDataSource {
    instructorReducer(inst) {
        return {
            _id: inst._id,
            name: inst.name,
            zoomLink: inst.zoomLink,
            photo: inst.photo,
            role: inst.role,
            languages: inst.languages? inst.languages : [],
            availDays: Object.keys(inst.schedule)
        }
    }

    async getAllInstructors() {
        const insts = await this.collection.find({}).toArray();
        return insts.map(inst => this.instructorReducer(inst));
    }

    getInstructor(email) {
        return this.collection.findOne({ email })
               .then(inst => this.instructorReducer(inst));
    }
}

exports.Students = class Students extends MongoDataSource {
    getStudent(email) {
        return this.collection.findOne({ email })
               .then(student => ({
                    _id: student._id,
                    email: student.email,
                    mcgillId: student.mcgillId
                }));
    }
}

exports.Appointments = class Appointments extends MongoDataSource {
    apptReducer(appt) {
        return {
            _id: appt._id,
            instructor: appt.instructor,
            student: appt.student? appt.student : null,
            date: appt.date.toISOString().split('T')[0],
            timeslot: appt.timeslot,
            isBooked: appt.isBooked
        }
    }

    async getAllAppointments() {
        const appts = await this.collection.find({}).toArray();
        return appts.map(appt => this.apptReducer(appt));
    }

    getAppointment(apptId) {
        return this.findOneById(ObjectID(apptId))
               .then(appt => this.apptReducer(appt));
    }

    bookAppointment(apptId, userId) {
        return this.collection.updateOne(
            { _id: ObjectID(apptId) },
            { $set: { student: ObjectID(userId), isBooked: true } }
        );
    }
}