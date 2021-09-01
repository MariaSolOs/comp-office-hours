import type { AppointmentOptions } from 'models';

import DateTimePicker from './DateTimePicker';

export type DateTimePickerProps = {
    date: Date;
    options: AppointmentOptions;
    timeslot: string; 
    onDateChange: (date: Date) => void;
    onTimeslotChange: (timeslot: string, bookingId: string) => void;  
}

export default DateTimePicker;