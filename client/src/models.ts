import type { 
    GetInstructorsQuery,
    GetAppointmentsQuery 
} from 'graphql-api';

export type Instructor = GetInstructorsQuery['instructors'][number];

export type AppointmentOptions = GetAppointmentsQuery['appointments'];

export type ConfirmationInfo = {
    instructor: Instructor;
    date: string;
    timeslot: string; 
}
