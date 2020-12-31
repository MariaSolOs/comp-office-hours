const { MongoDataSource } = require('apollo-datasource-mongodb'),
      { ObjectID } = require('mongodb');

module.exports = class Instructors extends MongoDataSource {
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

    async getInstructorById(id) {
        const inst = await this.findOneById(ObjectID(id));
        return this.instructorReducer(inst);
    }

    async getInstructorByEmail(email) {
        const inst = await this.collection.findOne({ email });
        return this.instructorReducer(inst);
    }
}