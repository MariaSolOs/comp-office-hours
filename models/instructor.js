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
        type: String,
        default: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,q_70,w_100/v1608409362/COMP202-OHBA/no-pic-user.jpg`
    },
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }]
});
 
module.exports = mongoose.model('Instructor', InstructorSchema);