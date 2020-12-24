import React, { useCallback } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { makeStyles } from '@material-ui/core/styles';
import styles from './DateTimePickerStyles';
const useStyles = makeStyles(styles);

const GET_APPOINTMENTS = gql`
    query getAppointments($instId: ID!, $date: String!){
        appointments(instId: $instId, date: $date) {
            id
            timeslot
        }
    }
`;

// TODO: Set this back to 2 weeks
const MAX_DATE = new Date().setDate(new Date().getDate() + 28);

const formatTimeslot = (slot) => {

}

const SlotPicker = ({ slots, selectedSlot, onSelection }) => {
    const classes = useStyles();

    const handleClick = (slot) => (e) => {
        e.preventDefault();
        onSelection(slot);
    }

    return (
        <div className={classes.timeslots}>
            {slots.map(({ id, timeslot }) => (
                <button 
                key={id} 
                className={`${classes.timeslot} 
                            ${(selectedSlot === timeslot) && 'selected'}`}
                onClick={handleClick(timeslot)}>
                    {timeslot}
                </button>
            ))}
        </div>
    );
}

const DateTimePicker = ({ date, onDateChange, selectedInst,
                          timeslot, onTimeslotChange }) => {
    const classes = useStyles();

    const [getAppts, { loading, error, data }] = useLazyQuery(GET_APPOINTMENTS);

    const handleDateChange = (date) => {
        getAppts({
            variables: { 
                instId: selectedInst.id, 
                date: `${date.getFullYear()}-${
                        ('' + (date.getMonth() + 1)).padStart(2, '0')
                        }-${('' + date.getDate()).padStart(2, '0')}`
            }
        });
        onDateChange(date);
    }

    const getAvailDates = useCallback((date) => {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                          'Thursday', 'Friday', 'Saturday'];
        return selectedInst.availDays.includes(weekdays[date.getDay()]);
    }, [selectedInst]);

    return (
        <>
        {loading? 
            'Loading...' : 
            error?
                <p>Loading available dates...</p> :
                <div className={classes.container}>
                    <ReactDatePicker 
                    minDate={new Date()}
                    maxDate={MAX_DATE}
                    inline
                    selected={date}
                    onChange={handleDateChange}
                    filterDate={getAvailDates}
                    calendarClassName={classes.calendar}/>
                    {data && 
                        <SlotPicker 
                        slots={data.appointments}
                        selectedSlot={timeslot}
                        onSelection={onTimeslotChange}/>}
                </div>}
        </>
    );
}

export default DateTimePicker;