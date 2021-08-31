import type { GetAppointmentsQuery } from 'graphql-api';

import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';
import styles from './SlotPickerStyles';
const useStyles = makeStyles(styles);

type Props = {
    slots: GetAppointmentsQuery['appointments'];
    selectedTimeslot: string;
    onSelection: (timeslot: string, bookingId: string) => void;
}

const SlotPicker = (props: Props) => {
    const classes = useStyles();

    const handleClick = (id: string, timeslot: string, isBooked: boolean) => {
        if (!isBooked) { 
            props.onSelection(timeslot, id); 
        }
    }

    if (!props.slots || props.slots?.length === 0) {
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
                title={isBooked ? 'Already booked.' : ''}
                disableFocusListener
                placement="top"
                classes={{ tooltip: classes.tooltip }}>
                    <button 
                    className={`${classes.timeslot} 
                                ${(props.selectedTimeslot === timeslot) && 'selected'}
                                ${isBooked && 'booked'}`}
                    onClick={() => handleClick(_id, timeslot, isBooked)}>
                        {timeslot}
                    </button>
                </Tooltip>
            ))}
        </div>
    );
}

export default SlotPicker;