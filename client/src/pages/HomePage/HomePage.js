import React, { useState, useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';

import InstructorList from './InstructorList/InstructorList';
import DateTimePicker from './DateTimePicker/DateTimePicker';

import { makeStyles } from '@material-ui/core/styles';
import { mainStyles } from './HomePageStyles';
const useStyles = makeStyles(mainStyles);

const GET_INSTRUCTORS = gql`
    query getInstructors {
        instructors {
            _id
            name 
            photo
            role
            languages
        }
    }
`;

const HomePage = (props) => {
    const classes = useStyles();

    const { loading, data, error } = useQuery(GET_INSTRUCTORS);

    const [inst, setInst] = useState(null);
    const [date, setDate] = useState(new Date());
    const [timeslot, setTimeslot] = useState(null);

    const handleInstChange = useCallback((instId) => {
        setInst(instId);
    }, []);

    const handleDateChange = useCallback((date) => {
        setDate(date);
    }, []);

    // TODO: Add loading spinner
    return (    
        <div className={classes.menu}>
            {loading? 
                'Loading...' :
                error? 
                <p>We cannot schedule your appointment right now.</p>:
                <>
                <div className={classes.section}>
                    <h2>Who would you like to see?</h2>
                    <InstructorList
                    instructors={data.instructors}
                    selectedInst={inst}
                    onInstChange={handleInstChange}/>
                </div>
                <div className={classes.section}>
                    <h2>When would you like to see them?</h2>
                    <DateTimePicker
                    date={date}
                    onDateChange={handleDateChange}
                    selectedInst={inst}/>
                </div>
                </>}
        </div>
    );
}

export default HomePage;