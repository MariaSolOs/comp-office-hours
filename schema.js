const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        instructors: [Instructor!]!
        appointments(instId: ID!, date: String!): [Appointment!]
    }

    type Mutation {
        login(email: String!): User!
        bookAppointment(bookingId: ID!): Appointment! 
    }

    interface User {
        _id: ID!
        email: String!
        token: String!
    }

    type Student implements User {
        _id: ID!
        email: String!
        mcgillId: String!
        token: String!
    }

    type Instructor implements User {
        _id: ID!
        name: String!
        email: String!
        zoomLink: String!
        photo: String 
        role: String!
        languages: [String!]
        availDays: [String!]
        token: String!
    }

    type Appointment {
        _id: ID!
        instructor: Instructor!
        student: Student 
        date: String!
        timeslot: String!
        isBooked: Boolean!
    }
`;

