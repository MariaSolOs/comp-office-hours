const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    instructor: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Instructor',
        required: true
    },

    student: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Student',
    },

    date: {
        type: Date,
        required: true
    },

    timeslot: {
        type: String,
        required: true,
        match: /\b(0[0-9]|1[0-9]|2[0-3])(:00|:20|:40)-(0[0-9]|1[0-9]|2[0-3])(:00|:20|:40)/
    },
    
    isBooked: {
        type: Boolean,
        required: true
    }
});
 
module.exports = mongoose.model('Appointment', AppointmentSchema);