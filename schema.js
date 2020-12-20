const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        getInstructors: [Instructor]!
        getAppointments(instId: ID!): [Appointment]
    }

    type Mutation {
        addAppointment(instId: ID!): UpdateResponse! 
    }

    type Student {
        _id: ID!
        name: String!
        mcgillId: String!
    }

    type Instructor {
        _id: ID!
        name: String!
        zoomLink: String!
        photo: String 
        appointments: [Appointment]
    }

    type Appointment {
        instructor: Instructor!
        student: Student 
        startTime: String!
        endTime: String!
    }

    type UpdateResponse {
        success: Boolean!
        message: String
    }
`;

