"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
    type Query {
        """
        List of all the instructors in the course.
        """
        instructors: [Instructor!]!

        """
        Appointments of the specified instructor
        """
        appointments(instId: ID!): [Appointment!]
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
        photo: String!
    }
`;
