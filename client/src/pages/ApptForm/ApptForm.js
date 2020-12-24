import React, { useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';
import { actionTypes, useAppointmentReducer } from './store';

import InstructorList from './InstructorList/InstructorList';
import DateTimePicker from './DateTimePicker/DateTimePicker';

import { makeStyles } from '@material-ui/core/styles';
import styles from './ApptFormStyles';
const useStyles = makeStyles(styles);

const GET_INSTRUCTORS = gql`
    query getInstructors {
        instructors {
            id
            name 
            photo
            role
            languages
            availDays
        }
    }
`;

const HomePage = (props) => {
    const classes = useStyles();

    const [state, dispatch] = useAppointmentReducer();

    const { loading, data, error } = useQuery(GET_INSTRUCTORS);

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
            defaultInst: data.instructors[0]
        });
    }, [dispatch, data]);

    const handleDateChange = useCallback((date) => {
        dispatch({
            type: actionTypes.DATE_CHANGE,
            date
        });
    }, [dispatch]);

    const handleTimeslotChange = useCallback((timeslot) => {
        dispatch({
            type: actionTypes.TIMESLOT_CHANGE,
            timeslot
        });
    }, [dispatch]);
    
    // TODO: Add loading spinner
    return (    
        <form className={classes.menu}>
            {loading? 
                'Loading...' :
                error? 
                <p>We cannot schedule your appointment right now.</p>:
                <>
                <div className={classes.section}>
                    <h2>Who would you like to see?</h2>
                    <InstructorList
                    instructors={data.instructors}
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
                </>}
        </form>
    );
}

export default HomePage;