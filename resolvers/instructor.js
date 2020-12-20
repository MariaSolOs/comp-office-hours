module.exports = {
    Query: {
        getInstructors: (_, __, { dataSources }) => {
            return dataSources.instructors.getInstructors();
        }
    }
}