let mongoose = require('mongoose');
let userModel = require('./models/User');
let eventModel = require('./models/Events');
let userJson = require('./userData.json');
let eventJson = require('./eventData.json');


const deleteUsers = async () => {
    try {
        await userModel.deleteMany().then(() => {
            userModel.create(userJson).then(users => {
                console.log('Data Destroyed...'.users)
                // mongoose.disconnect()
            })
        });
        process.exit()
    } catch (err) {
        console.error(err)
    }
}

const deleteEvents = async () => {
    try {
        await eventModel.deleteMany().then(() => {
            eventModel.create(eventJson).then(events => {
                console.log('Data Destroyed...'.users)
                // mongoose.disconnect()
            })
        });
        process.exit()
    } catch (err) {
        console.error(err)
    }
}


    

