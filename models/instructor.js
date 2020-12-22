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
    schedule: {
        type: Map,
        of: {
            type: [String]
        },
        required: true,
        validate: input => {
            const weekdays = ['Monday', 'Tuesday', 'Wednesday', 
                              'Thursday', 'Friday'];
            const slotReg = /\b(0[0-9]|1[1-9]|2[0-3])(:00|:20|:40)-(0[0-9]|1[1-9]|2[0-3])(:00|:20|:40)/;
            const correctKeys = Array.from(input.keys())
                                .every(key => weekdays.includes(key));
            const correctSlots = Array.from(input.values())
                                .every(val => slotReg.test(val));
            return correctKeys && correctSlots;
        }
    }
});
 
module.exports = mongoose.model('Instructor', InstructorSchema);