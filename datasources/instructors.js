const { MongoDataSource } = require('apollo-datasource-mongodb');

module.exports = class Instructors extends MongoDataSource {
    getAllInstructors() {
        return this.collection.find({}).toArray();
    }
}