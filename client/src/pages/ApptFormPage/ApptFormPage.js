import React, { useState, useCallback } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { actionTypes, useAppointmentReducer } from './store';
import { useHistory } from 'react-router-dom';

import InstructorList from './InstructorList/InstructorList';
import DateTimePicker from './DateTimePicker/DateTimePicker';

import { makeStyles } from '@material-ui/core/styles';
import styles from './ApptFormPageStyles';
const useStyles = makeStyles(styles);

const GET_INSTRUCTORS = gql`
    query GetInstructors {
        instructors {
            _id
            name 
            photo
            role
            languages
            availDays
        }
    }
`;

const BOOK_APPT = gql`
    mutation BookAppt($apptId: ID!) {
        bookAppointment(apptId: $apptId) {
            student {
                email
            }
            date
            timeslot
        }
    }
`;

const ApptFormPage = () => {
    const classes = useStyles();

    const history = useHistory();
    
    const { loading: instsLoading, 
            data: instsData, 
            error: instsError } = useQuery(GET_INSTRUCTORS);
    const [bookAppt,
          { loading: bookingLoading,
            error: bookingError }] = useMutation(BOOK_APPT, { 
                onCompleted: ({ bookAppointment }) => {
                    history.push({ 
                        pathname: '/booking-confirm',
                        state: {
                            instructor: state.inst,
                            date: bookAppointment.date,
                            timeslot: bookAppointment.timeslot,
                            studentEmail: bookAppointment.student.email
                        }
                    });
                }
            }
        );

    const [state, dispatch] = useAppointmentReducer();

    const handleInstChange = useCallback((inst) => {
        dispatch({
            type: actionTypes.INSTRUCTOR_CHANGE,
            inst
        });
    }, [dispatch]);

    const handleAnyInst = useCallback((e) => {
        dispatch({
            type: actionTypes.ANY_INST_CHANGE,
            useAnyInst: e.target.checked,
            defaultInst: instsData.instructors[0]
        });
    }, [dispatch, instsData]);

    const handleDateChange = useCallback((date) => {
        dispatch({
            type: actionTypes.DATE_CHANGE,
            date
        });
    }, [dispatch]);

    const handleTimeslotChange = useCallback((timeslot, bookingId) => {
        dispatch({
            type: actionTypes.TIMESLOT_CHANGE,
            timeslot,
            bookingId
        });
    }, [dispatch]);

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(state.inst === null && !state.useAnyInst) {
            setErrorMsg('Please select an instructor.');
            return;
        }

        if(state.timeslot === null) {
            setErrorMsg('Please select a time slot');
            return;
        }

        bookAppt({ variables: { apptId: state.bookingId } });
    }
    
    return ( 
        <form className={classes.menu} onSubmit={handleSubmit}>
            {instsLoading || bookingLoading? 
                'Loading...' :
                instsError || bookingError? 
                <p>We cannot schedule your appointment right now.</p>:
                <>
                <div className={classes.section}>
                    <h2>Who would you like to see?</h2>
                    <InstructorList
                    instructors={instsData.instructors}
                    selectedInst={state.inst}
                    onInstChange={handleInstChange}
                    useAnyInst={state.useAnyInst}
                    onAnyInst={handleAnyInst}/>
                </div>
                {state.showCal && 
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
                        onDateChange={handleDateChange}
                        selectedInst={state.inst}
                        timeslot={state.timeslot}
                        onTimeslotChange={handleTimeslotChange}/>
                    </div>}
                {errorMsg && 
                    <p className={classes.errorMsg}>{errorMsg}</p>}
                {state.showCal &&
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