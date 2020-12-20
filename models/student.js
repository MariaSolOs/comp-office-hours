const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    mcgillId: {
        type: String,
        required: true,
        match: /[0-9]{9}/ // TODO: Improve this regex
    }
});

module.exports = mongoose.model('Student', StudentSchema);