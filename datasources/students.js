const { MongoDataSource } = require('apollo-datasource-mongodb');

module.exports = class Students extends MongoDataSource {
    getStudent(email) {
        return this.collection.findOne({ email });
    }
}