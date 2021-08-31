import { gql } from 'apollo-server-express';

export const typeDefs = gql`
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
        Books an appointment.
        """
        bookAppointment(apptId: ID!): Appointment! 
    }

    type Appointment {
        _id: ID!
        instructor: Instructor!
        date: String!
        timeslot: String!
        isBooked: Boolean!
    }

    type Instructor {
        _id: ID!
        name: String!
        email: String!
        zoomLink: String!
        photo: String 
        availDays: [String!]
    }
`;

