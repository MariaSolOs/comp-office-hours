const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    zoomLink: {
        type: String,
        required: true
    },
    photo: {
        //TODO: Add default image
        type: String
    },
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }]
});
 
module.exports = mongoose.model('Instructor', InstructorSchema);