import type { GetAppointmentsQuery } from 'graphql-api';

import SlotPicker from './SlotPicker';

export type SlotPickerProps = {
    slots: GetAppointmentsQuery['appointments'];
    selectedTimeslot: string;
    onSelection: (timeslot: string, bookingId: string) => void;
}

export default SlotPicker;