const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        instructors: [Instructor]!
        appointments(instId: ID!, date: String!): [Appointment]
    }

    type Mutation {
        bookAppointment(instId: ID!): Appointment! 
    }

    type Student {
        id: ID!
        email: String!
        mcgillId: String!
    }

    type Instructor {
        id: ID!
        name: String!
        zoomLink: String!
        photo: String 
        role: String!
        languages: [String]
        availDays: [String]
    }

    type Appointment {
        id: ID!
        instructor: Instructor!
        student: Student 
        date: String!
        timeslot: String!
    }
`;

