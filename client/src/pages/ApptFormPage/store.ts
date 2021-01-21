import { useReducer, useCallback } from 'react';

const initialState = {
    inst: null,
    useAnyInst: false,
    showCal: false,
    date: new Date(),
    timeslot: null,
    bookingId: null
};

export const actionTypes = {
    INSTRUCTOR_CHANGE: 'INSTRUCTOR_CHANGE',
    ANY_INST_CHANGE: 'ANY_INST_CHANGE',
    DATE_CHANGE: 'DATE_CHANGE',
    TIMESLOT_CHANGE: 'TIMESLOT_CHANGE'
}

export function useAppointmentReducer() {
    const reducer = useCallback((state, action) => {
        switch (action.type) {
            case actionTypes.INSTRUCTOR_CHANGE:
                return {
                    ...state,
                    inst: action.inst,
                    date: new Date(),
                    timeslot: null,
                    showCal: true
                }
            case actionTypes.ANY_INST_CHANGE:
                return {
                    ...state,
                    inst: action.useAnyInst? 
                            action.defaultInst : state.inst,
                    useAnyInst: action.useAnyInst,
                    showCal: true
                }
            case actionTypes.DATE_CHANGE:
                return {
                    ...state,
                    showCal: true,
                    date: action.date,
                    timeslot: null
                }
            case actionTypes.TIMESLOT_CHANGE:
                return {
                    ...state,
                    showCal: true,
                    timeslot: action.timeslot,
                    bookingId: action.bookingId
                }
            
            default: return state
        }
    }, []);

    return useReducer(reducer, initialState);
}