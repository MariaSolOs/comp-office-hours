import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { 
    useGetInstructorsQuery, 
    useGetAppointmentsLazyQuery,
    useBookAppointmentMutation 
} from 'graphql-api';
import useAppointmentReducer from 'hooks/useAppointmentReducer';
import type { Instructor } from 'models';

import InstructorList from './InstructorList/InstructorList';
import DateTimePicker from './DateTimePicker/DateTimePicker';

import { makeStyles } from '@material-ui/core/styles';
import styles from './ApptFormPageStyles';
const useStyles = makeStyles(styles);

const getRandomInstructor = (instructors?: Instructor[]) => {
    if (!instructors) {
        return undefined;
    } else {
        const randIdx = Math.floor(Math.random() * instructors.length);
        return instructors[randIdx];
    }
}

const ApptFormPage = () => {
    const history = useHistory();
    const classes = useStyles();
    
    // Get the list of instructor options
    const {
        loading: instructorsLoading,
        data: instructorsData,
        error: instructorsError
    } = useGetInstructorsQuery();

    const [getAppointments] = useGetAppointmentsLazyQuery({
        onCompleted: ({ appointments }) => {
            dispatch({ type: 'SET_APPOINTMENTS', appointments });
        }
    });
    
    const [
        bookAppointment,
        { loading: bookingLoading, error: bookingError }
    ] = useBookAppointmentMutation({
        onCompleted: ({ bookAppointment }) => {
            history.push({ 
                pathname: '/booking-confirm',
                state: {
                    instructor: state.instructor,
                    date: bookAppointment.date,
                    timeslot: bookAppointment.timeslot
                }
            });
        }
    });

    const [state, dispatch] = useAppointmentReducer();
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!state.instructor) {
            setErrorMsg('Please select an instructor.');
            return;
        }

        if (!state.timeslot) {
            setErrorMsg('Please select a time slot');
            return;
        }

        bookAppointment({ variables: { apptId: state.bookingId } });
    }

    // Get the appointments when the instructor is selected
    useEffect(() => {
        if (state.instructor) {
            getAppointments({ variables: { instId: state.instructor._id } });
        }
    }, [state.instructor, getAppointments]);

    const showCalendar = Boolean(state.instructor);
    
    return ( 
        <form className={classes.menu} onSubmit={handleSubmit}>
            {(instructorsLoading || bookingLoading) ? 
                'Loading...' :
                (instructorsError || bookingError) ? 
                <p>We cannot schedule your appointment right now.</p> :
                <>
                    <div className={classes.section}>
                        <h2>Who would you like to see?</h2>
                        <InstructorList
                        instructors={instructorsData?.instructors || []}
                        selectedInstructor={state.instructor}
                        onInstructorChange={instructor => {
                            dispatch({ type: 'SET_INSTRUCTOR', instructor });
                        }}
                        useAnyInstructor={state.useAnyInstructor}
                        onToggleAnyInstructor={event => {
                            dispatch({ 
                                type: 'TOGGLE_ANY_INSTRUCTOR', 
                                useAny: event.target.checked,
                                defaultInstructor: getRandomInstructor(instructorsData?.instructors)
                            });
                        }} />
                    </div>
                    {showCalendar && 
                        <div className={classes.section}>
                            <div className={classes.calendarHeader}>
                                <h2 className="calheader-title">
                                    When would you like to see them?
                                </h2>
                                <span className="calheader-msg">
                                    All time slots are in EST time
                                </span>
                            </div>
                            <DateTimePicker
                            date={state.date}
                            options={state.appointmentOptions}
                            timeslot={state.timeslot}
                            onDateChange={date => {
                                dispatch({ type: 'SET_DATE', date });
                            }}
                            onTimeslotChange={(timeslot, bookingId) => {
                                dispatch({ 
                                    type: 'SET_TIMESLOT', 
                                    timeslot,
                                    bookingId
                                });
                            }} />
                        </div>}
                    {errorMsg && <p className={classes.errorMsg}>{errorMsg}</p>}
                    {showCalendar &&
                        <button 
                        type="submit" 
                        className={classes.submitButton}>
                            Complete booking
                        </button>}
                </>}
        </form>
    );
}

export default ApptFormPage;