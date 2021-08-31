import { Schema, model } from 'mongoose';
import mongooseLeanDefaults from 'mongoose-lean-defaults';
import type { Types, SchemaDefinitionProperty } from 'mongoose';

import type { Instructor } from './instructor';

export interface Appointment {
    _id: Types.ObjectId;
    instructor: Types.ObjectId | Instructor;
    date: string;
    timeslot: string;
    isBooked: boolean;
}

const appointmentSchemaFields: Record<keyof Omit<Appointment, '_id'>, SchemaDefinitionProperty> = {
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true
    },
    
    date: {
        type: String,
        required: true
    },
    
    timeslot: {
        type: String,
        required: true
    },
    
    isBooked: {
        type: Boolean,
        required: true
    }
}

const appointmentSchema = new Schema<Appointment>(appointmentSchemaFields);
appointmentSchema.plugin(mongooseLeanDefaults);

export default model<Appointment>('Appointment', appointmentSchema);
