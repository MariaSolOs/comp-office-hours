import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';
import styles from './SlotPickerStyles';
const useStyles = makeStyles(styles);

type Props = {
    slots: { _id: string; timeslot: string; isBooked: boolean }[];
    selectedTimeslot: string;
    onSelection: (timeslot: string, bookingId: string) => void;
}

const SlotPicker = (props: Props) => {
    const classes = useStyles();

    const handleClick = (timeslot: string, 
                         id: string, 
                         isBooked: boolean) => (e: React.MouseEvent) => {
        e.preventDefault();
        if(!isBooked) { props.onSelection(timeslot, id); }
    }

    if(props.slots.length === 0) {
        return (
            <p className={classes.noSlotsMsg}>
                No appointments available.
            </p>
        );
    }

    return (
        <div className={classes.timeslots}>
            {props.slots.map(({ _id, timeslot, isBooked }) => (
                <Tooltip 
                key={_id}
                title={isBooked? 'Already booked.' : ''}
                disableFocusListener
                placement="top"
                classes={{ tooltip: classes.tooltip }}>
                    <button 
                    className={`${classes.timeslot} 
                                ${(props.selectedTimeslot === timeslot) && 'selected'}
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