module.exports = {
    Query: {
        instructors: (_, __, { dataSources }) => {
            return dataSources.instructorAPI.getAllInstructors();
        }
    }
}