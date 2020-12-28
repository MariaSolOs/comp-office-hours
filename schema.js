const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        instructors: [Instructor!]!
        appointments(instId: ID!, date: String!): [Appointment!]
    }

    type Mutation {
        login(email: String!): User!
        bookAppointment(apptId: ID!): Appointment! 
    }

    interface User {
        """
        Representation of any user of the website. 
        *token* is used for client-side authentication.
        """
        _id: ID!
        email: String!
        token: String!
    }

    enum Role {
        """
        Possible role of a COMP202 instructor.
        """
        INSTRUCTOR
        TA
        TEAM_MENTOR
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
        role: Role
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

