import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import { DatePicker } from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';
import styles from './DateTimePickerStyles';
const useStyles = makeStyles(styles);

const GET_APPOINTMENTS = gql`
    query getAppointments($instId: ID!, $date: String!){
        appointments(instId: $instId, date: $date) {
            timeslot
        }
    }
`;

const getMaxDate = () => {
    const in2Weeks = new Date();
    // TODO: Set this back to 2 weeks
    // return in2Weeks.setDate(in2Weeks.getDate() + 14);
    return in2Weeks.setDate(in2Weeks.getDate() + 28);
}

const DateTimePicker = ({ date, onDateChange, selectedInst }) => {
    const classes = useStyles();

    const [getAppts, { loading, error, data }] = useLazyQuery(GET_APPOINTMENTS);

    const handleDateChange = (date) => {
        getAppts({
            variables: { 
                instId: selectedInst, 
                date: date.toISOString().split('T')[0]
            }
        });
        onDateChange(date);
    }

    console.log(data)

    return (
        <>
        {loading? 
            'Loading...' : 
            error?
                <p>Loading available dates...</p> :
                <DatePicker
                variant="static"
                value={date}
                onChange={handleDateChange}
                maxDate={getMaxDate()}/>}
        </>
    );
}

export default DateTimePicker;