import ReactDatePicker from 'react-datepicker';
import SlotPicker from 'components/SlotPicker/SlotPicker';

import { getDateString } from 'utils/date';
import type { AppointmentOptions } from 'models';

import 'react-datepicker/dist/react-datepicker.css';
import { makeStyles } from '@material-ui/core/styles';
import styles from './DateTimePickerStyles';
const useStyles = makeStyles(styles);

// Can make appointments up to 2 weeks in advance
const MAX_DATE = new Date().setDate(new Date().getDate() + 14);

type Props = {
    date: Date;
    options: AppointmentOptions;
    timeslot: string; 
    onDateChange: (date: Date) => void;
    onTimeslotChange: (timeslot: string, bookingId: string) => void;  
}

const DateTimePicker = (props: Props) => {
    const classes = useStyles();

    const getAvailableDates = (date: Date) => {
        if (props.options) {
            return props.options.map(({ date }) => 
                date
            ).includes(getDateString(date));
        } else {
            return false;
        }
    }

    const slots = props.options?.filter(({ date }) =>
        date === getDateString(props.date)
    );

    return (
        <div className={classes.container}>
            <ReactDatePicker 
            minDate={new Date()}
            maxDate={new Date(MAX_DATE)}
            inline
            selected={new Date(props.date)}
            onChange={props.onDateChange}
            filterDate={getAvailableDates}
            calendarClassName={classes.calendar}/>
            {slots && 
                <SlotPicker 
                slots={slots || []}
                selectedTimeslot={props.timeslot}
                onSelection={props.onTimeslotChange}/>}
        </div>
    );
}

export default DateTimePicker;