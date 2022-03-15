let mongoose = require('mongoose');
let userModel = require('./models/User');
let eventModel = require('./models/Events');
let userJson = require('./userData.json');
let eventJson = require('./eventData.json');

    userModel.deleteMany({})
        .then(() => {
            userModel.create(userJson)
                .then(users => {
                    mongoose.disconnect()
                })
        }),

    eventModel.deleteMany({})
        .then(() => {
            eventModel.create(eventJson)
                .then(events => {
                    mongoose.disconnect()
                })
        })