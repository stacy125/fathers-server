// let mongoose = require('mongoose')
// let eventModel = require('./models/Events');
// require('mongodb');


// mongoose.connect(connectionString, { useUnifiedTopology: true })
//     .then(client => {
//         console.log('Connected to Database')
//         const db = client.db('fatherhoodIsLit')
//         const eventsCollection = db.collection('events')

  

//         app.post('/events', (req, res) => {
//             eventsCollection.insertOne(req.body)
//                 .then(result => {
//                     console.log(result)
//                 })
//                 .catch(error => console.error(error))
//         })

//         app.post('/events', (req, res) => {
//             eventsCollection.insertOne(req.body)
//                 .then(result => {
//                     res.redirect('/')
//                 })
//                 .catch(error => console.error(error))
//         })


//         app.get('/', (req, res) => {
//             const eventsCol = db.collection('events').find().pretty()
//             console.log(eventsCol)
//             // ...
//         })

//         app.use(bodyParser.json())

// let controller = {
//     create(request, response) {
//         let events = request.body
//         eventModel.create(events).then(events => response.json({ events }))
//     },

//     read(request, response) {
//         eventModel.find().then(events => response.json(events))
//     },

//     update(request, response) {
//         eventModel.findByIdAndUpdate({ id: request.params.id }, request.body, { new: true }).then(events => response.json(events))
//     },
//     delete(request, response) {
//         eventModel.findOneAndDelete({ id: request.params.id }).then(events => response.json(events))
//     }

// }

// module.exports = controller