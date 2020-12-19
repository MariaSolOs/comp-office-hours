const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        getInstructors: [Instructor]!
        getAppointments(id: ID!): [Appointment]
    }

    type Mutation {
        addAppointment(instId: ID!): UpdateResponse! 
    }

    type Student {
        id: ID
        name: String!
        mcgillId: Int
    }

    type Instructor {
        id: ID
        name: String!
        zoomLink: String!
        photo: String 
        appointments: [Appointment]
    }

    type Appointment {
        instructor: Instructor!
        student: Student 
        zoomLink: String!
        startTime: String!
        endTime: String!
    }

    type UpdateResponse {
        success: Boolean!
        message: String
    }
`;

