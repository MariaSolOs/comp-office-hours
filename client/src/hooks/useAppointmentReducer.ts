import { useReducer, useCallback } from 'react';

import type { Instructor, AppointmentOptions } from 'models';

interface AppointmentState {
    instructor?: Instructor;
    useAnyInstructor: boolean;
    appointmentOptions: AppointmentOptions;
    date: Date;
    timeslot: string;
    bookingId: string;
}

const initialState: AppointmentState = {
    useAnyInstructor: false,
    appointmentOptions: [],
    date: new Date(),
    timeslot: '',
    bookingId: '',
}

type Action = 
| { type: 'SET_INSTRUCTOR'; instructor: Instructor; }
| { type: 'TOGGLE_ANY_INSTRUCTOR'; useAny: boolean; defaultInstructor?: Instructor; }
| { type: 'SET_APPOINTMENTS'; appointments: AppointmentOptions; }
| { type: 'SET_DATE'; date: Date; }
| { type: 'SET_TIMESLOT'; timeslot: string; bookingId: string; }

export default function useAppointmentReducer() {
    const reducer = useCallback((state: AppointmentState, action: Action): AppointmentState => {
        switch (action.type) {
            case 'SET_INSTRUCTOR':
                return {
                    ...state,
                    instructor: action.instructor,
                    timeslot: ''
                }
            case 'TOGGLE_ANY_INSTRUCTOR':
                return {
                    ...state,
                    instructor: action.useAny ? action.defaultInstructor : state.instructor,
                    useAnyInstructor: action.useAny
                }
            case 'SET_APPOINTMENTS':
                return {
                    ...state,
                    appointmentOptions: action.appointments,
                    timeslot: ''
                }
            case 'SET_DATE':
                return {
                    ...state,
                    date: action.date,
                    timeslot: ''
                }
            case 'SET_TIMESLOT':
                return {
                    ...state,
                    timeslot: action.timeslot,
                    bookingId: action.bookingId
                }
            default: return state;
        }
    }, []);

    return useReducer(reducer, initialState);
}