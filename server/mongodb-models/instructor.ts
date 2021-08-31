import { Schema, model } from 'mongoose';
import mongooseLeanDefaults from 'mongoose-lean-defaults';
import type { Types, SchemaDefinitionProperty } from 'mongoose';

export interface Instructor {
    _id: Types.ObjectId;
    name: string;
    zoomLink: string;
    email: string;
    photo?: string;
}

const instructorSchemaFields: Record<keyof Omit<Instructor, '_id'>, SchemaDefinitionProperty> = {
    name: {
        type: String,
        required: true
    },

    zoomLink: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        match: /(@mail\.mcgill\.ca|@mcgill.ca)$/
    },

    photo: {
        type: String,
        default: 'https://res.cloudinary.com/dxod7etqu/image/upload/c_scale,q_70,w_100/v1608409362/COMP202-OHBA/no-pic-user.jpg'
    }
}

const instructorSchema = new Schema<Instructor>(instructorSchemaFields);
instructorSchema.plugin(mongooseLeanDefaults);

export default model<Instructor>('Instructor', instructorSchema);