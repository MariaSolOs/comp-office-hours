import type { Appointment } from '../mongodb-models/appointment';
import type { Instructor } from '../mongodb-models/instructor';

export const appointmentMapper = (appt: Appointment | null) => ({
    _id: appt?._id || '',
    instructor: appt?.instructor || '',
    date: appt?.date || '',
    timeslot: appt?.timeslot || '',
    isBooked: appt?.isBooked || false
});

export const instructorMapper = (inst: Instructor | null) => ({
    _id: inst?._id || '',
    name: inst?.name || '',
    email: inst?.email || '',
    zoomLink: inst?.zoomLink || '',
    photo: inst?.photo || '',
    availDays: inst ? Object.keys(inst.schedule) : []
});