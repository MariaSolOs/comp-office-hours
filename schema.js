const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        instructors: [Instructor]!
        appointments(instId: ID!, date: String!): [Appointment]
    }

    type Mutation {
        addAppointment(instId: ID!): Boolean! 
    }

    type Student {
        _id: ID!
        email: String!
        mcgillId: String!
    }

    type Instructor {
        _id: ID!
        name: String!
        zoomLink: String!
        photo: String 
        role: String!
        languages: [String]
    }

    type Appointment {
        instructor: Instructor!
        student: Student 
        date: String!
        timeslot: String!
    }
`;

