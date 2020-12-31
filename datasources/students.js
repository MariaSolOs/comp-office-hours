const { MongoDataSource } = require('apollo-datasource-mongodb'),
      { ObjectID } = require('mongodb');

module.exports = class Students extends MongoDataSource {
    studentReducer(student) {
        return {
            _id: student._id,
            email: student.email,
            mcgillId: student.mcgillId
        }
    }

    async getStudentById(id) {
        const student = await this.findOneById(ObjectID(id));
        return this.studentReducer(student);
    }

    async getStudentByEmail(email) {
        const student = await this.collection.findOne({ email });
        return this.studentReducer(student);
    }
}