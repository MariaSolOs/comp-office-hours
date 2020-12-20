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
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
});
 
module.exports = mongoose.model('Appointment', AppointmentSchema);