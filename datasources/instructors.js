const { MongoDataSource } = require('apollo-datasource-mongodb'),
      { ObjectID } = require('mongodb');

module.exports = class Instructors extends MongoDataSource {
    instReducer(inst) {
        return {
            ...inst,
            availDays: Object.keys(inst.schedule)
        }
    }

    async getAllInstructors() {
        const insts = await this.collection.find({}).toArray();
        return insts.map(inst => this.instReducer(inst));
    }

    async getInstructorById(id) {
        const inst = await this.findOneById(ObjectID(id));
        return this.instReducer(inst);
    }

    async getInstructorByEmail(email) {
        const inst = await this.collection.findOne({ email });
        return this.instReducer(inst);
    }
}