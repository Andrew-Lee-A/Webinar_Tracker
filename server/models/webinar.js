const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const webinarSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    cpd_hours: {
        type: Number,
        required: true
    }
    // ,
    // url: {
    //     type: String,
    //     required: true
    // }
    // ,
    // experience: {
    //     type: String,
    // }
}, {timestamps: true});

const Webinar = mongoose.model('Webinar', webinarSchema);
module.exports = Webinar;
