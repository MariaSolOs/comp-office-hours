const { gql } = require('apollo-server-express');

module.exports = gql`
    type Query {
        """
        List of all the instructors in the course.
        """
        instructors: [Instructor!]!

        """
        Appointments of the specified instructor on the indicated date.
        """
        appointments(instId: ID!, date: String!): [Appointment!]
    }

    type Mutation {
        """
        Given an email, logs in the corresponding user.
        """
        login(email: String!): User!

        """
        Books an appointment.
        *Assumes that the user in the context is the student 
        making the booking*.
        """
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
        name: String
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

