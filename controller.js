
let eventModel = require('./models/Events');
require('mongodb');




let controller = {
    create(request, response) {
        let events = request.body
        eventModel.create(events).then(events => response.json({ events }))
    },

    read(request, response) {
        eventModel.find({}).then(events => response.json(events))
    },

    update(request, response) {
        eventModel.findByIdAndUpdate({ id: request.params.id }, request.body, { new: true }).then(events => response.json(events))
    },
    delete(request, response) {
        eventModel.findOneAndDelete({ id: request.params.id }).then(events => response.json(events))
    }

}

module.exports = controller