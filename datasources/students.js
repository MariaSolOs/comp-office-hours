const { MongoDataSource } = require('apollo-datasource-mongodb'),
      { ObjectID } = require('mongodb');

module.exports = class Students extends MongoDataSource {
    getStudentById(id) {
        return this.findOneById(ObjectID(id));
    }

    getStudentByEmail(email) {
        return this.collection.findOne({ email });
    }
}