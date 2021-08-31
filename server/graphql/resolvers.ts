import { Types } from 'mongoose';
import { ApolloError } from 'apollo-server-express';

import Instructor from '../mongodb-models/instructor';
import Appointment from 'mongodb-models/appointment';
import { instructorMapper, appointmentMapper } from '../utils/data-mappers';
import { sendEmailToStudent, sendEmailToInstructor } from '../utils/email';
import { LEAN_DEFAULTS } from '../server-types';
import type { Resolvers } from './resolvers-types';

export const resolvers: Resolvers = {
    Appointment: {
        instructor: ({ instructor }) => Instructor.findById(instructor).lean(LEAN_DEFAULTS).then(instructorMapper)
    },

    Query: {
        instructors: async () => {
            const instructors = await Instructor.find({}).lean(LEAN_DEFAULTS);
            return instructors.map(instructorMapper);
        },

        appointments: async (_, { instId, date }) => {
            const appts = await Appointment.find({}).lean(LEAN_DEFAULTS);
            return appts.filter(appt => 
                date === appt.date.toString() && 
                Types.ObjectId(instId) === (appt.instructor as Types.ObjectId)
            ).map(appointmentMapper);
        }
    },

    Mutation: {
        bookAppointment: async (_, { apptId }, { userEmail }) => {
            const appt = await Appointment.findOneAndUpdate(
                { _id: Types.ObjectId(apptId), isBooked: false }, 
                { isBooked: true }
            ).lean(LEAN_DEFAULTS);
            if (!appt) {
                throw new ApolloError('Appointment not found.');
            }

            const instructor = await Instructor.findById(appt.instructor).lean(LEAN_DEFAULTS);
            if (!instructor) {
                throw new ApolloError('Instructor not found.');
            }

            sendEmailToStudent(
                userEmail, 
                instructor.name,
                appt.date,
                appt.timeslot,
                instructor.zoomLink
            );
            
            sendEmailToInstructor(
                instructor.email,
                userEmail,
                instructor.name,
                appt.date,
                appt.timeslot,
                instructor.zoomLink
            );

            return appointmentMapper(appt);
        }
    }
}