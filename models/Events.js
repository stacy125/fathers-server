const mongoose = require('mongoose');



const eventSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String
    },
    website: {
        type: String
    }
});



mongoose.model('Events', eventSchema);
