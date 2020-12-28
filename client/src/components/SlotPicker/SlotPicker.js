import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';
import styles from './SlotPickerStyles';
const useStyles = makeStyles(styles);

const SlotPicker = ({ slots, selectedSlot, onSelection }) => {
    const classes = useStyles();

    const handleClick = (slot, id, isBooked) => (e) => {
        e.preventDefault();
        if(!isBooked) { onSelection(slot, id); }
    }

    if(slots.length === 0) {
        return (
            <p className={classes.noSlotsMsg}>
                No appointments available.
            </p>
        );
    }

    return (
        <div className={classes.timeslots}>
            {slots.map(({ _id, timeslot, isBooked }) => (
                <Tooltip 
                key={_id}
                title={isBooked? 'Already booked.' : ''}
                disableFocusListener
                placement="top"
                classes={{ tooltip: classes.tooltip }}>
                    <button 
                    className={`${classes.timeslot} 
                                ${(selectedSlot === timeslot) && 'selected'}
                                ${isBooked && 'booked'}`}
                    onClick={handleClick(timeslot, _id, isBooked)}>
                        {timeslot}
                    </button>
                </Tooltip>
            ))}
        </div>
    );
}

export default SlotPicker;