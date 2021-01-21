import React, { useCallback } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { Instructor } from '../../../models';

import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SlotPicker from '../../../components/SlotPicker/SlotPicker';

import { makeStyles } from '@material-ui/core/styles';
import styles from './DateTimePickerStyles';
const useStyles = makeStyles(styles);

const GET_APPOINTMENTS = gql`
    query getAppointments($instId: ID!, $date: String!){
        appointments(instId: $instId, date: $date) {
            _id
            timeslot
            isBooked
            instructor {
                name
            }
        }
    }
`;

const MAX_DATE = new Date().setDate(new Date().getDate() + 14);

type Props = {
    date: string;
    onDateChange: (date: Date) => void;
    selectedInst: Instructor;
    timeslot: string; 
    onTimeslotChange: (timeslot: string, bookingId: string) => void;  
}

const DateTimePicker = (props: Props) => {
    const classes = useStyles();

    const [getAppts, { loading, error, data }] = useLazyQuery(GET_APPOINTMENTS);

    const handleDateChange = (date: Date) => {
        getAppts({
            variables: { 
                instId: props.selectedInst._id, 
                date: `${date.getFullYear()}-${
                        ('' + (date.getMonth() + 1)).padStart(2, '0')
                        }-${('' + date.getDate()).padStart(2, '0')}`
            }
        });
        props.onDateChange(date);
    }

    const getAvailDates = useCallback((date: Date) => {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                          'Thursday', 'Friday', 'Saturday'] as const;
        return props.selectedInst.availDays.includes(weekdays[date.getDay()]);
    }, [props.selectedInst]);

    return (
        <>
        {loading? 
            'Loading...' : 
            error?
                <p>Loading available dates...</p> :
                <div className={classes.container}>
                    <ReactDatePicker 
                    minDate={new Date()}
                    maxDate={new Date(MAX_DATE)}
                    inline
                    selected={new Date(props.date)}
                    onChange={handleDateChange}
                    filterDate={getAvailDates}
                    calendarClassName={classes.calendar}/>
                    {data && 
                        <SlotPicker 
                        slots={data.appointments}
                        selectedTimeslot={props.timeslot}
                        onSelection={props.onTimeslotChange}/>}
                </div>}
        </>
    );
}

export default DateTimePicker;