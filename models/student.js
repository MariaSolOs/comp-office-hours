const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: /(@mail\.mcgill\.ca|@mcgill.ca)$/
    },

    mcgillId: {
        type: String,
        required: true,
        match: /[0-9]{9}/ // TODO: Improve this regex
    },

    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student', StudentSchema);