const { MongoDataSource } = require('apollo-datasource-mongodb');

module.exports = class Instructors extends MongoDataSource {
    async getAllInstructors() {
        const insts = await this.collection.find({}).toArray();
        return insts.map(inst => ({
            id: inst._id,
            name: inst.name,
            zoomLink: inst.zoomLink,
            photo: inst.photo,
            role: inst.role,
            languages: inst.languages? inst.languages : [],
            availDays: Object.keys(inst.schedule)
        }));
    }
}