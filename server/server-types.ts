import { appointmentMapper, instructorMapper } from './utils/data-mappers';

export type Context = { userEmail: string }

// Configuration for MongoDB lean()
export const LEAN_DEFAULTS = { defaults: true } as const;

export type AppointmentType = ReturnType<typeof appointmentMapper>;

export type InstructorType = ReturnType<typeof instructorMapper>;