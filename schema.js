const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        instructors: [Instructor!]!
        appointments(instId: ID!, date: String!): [Appointment!]
    }

    type Mutation {
        login(email: String!): AuthData!
        bookAppointment(bookingId: ID!): Appointment! 
    }

    type Student {
        id: ID!
        email: String!
        mcgillId: String!
    }

    type Instructor {
        id: ID!
        name: String!
        email: String!
        zoomLink: String!
        photo: String 
        role: String!
        languages: [String!]
        availDays: [String!]
    }

    union User = Student | Instructor

    type Appointment {
        id: ID!
        instructor: Instructor!
        student: Student 
        date: String!
        timeslot: String!
        isBooked: Boolean!
    }

    type AuthData {
        token: String!
    }
`;

