const { MongoDataSource } = require('apollo-datasource-mongodb');

module.exports = class Instructors extends MongoDataSource {
    async getInstructors () {
        return this.collection.find({})
               .toArray()
               .then(items => items);
    }

    getInstructor(instId) {
        return this.findOneById(instId);
    }
}