

require("./models/User");
require('./models/Events');
let router = require('./router')
let cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");


const app = express();
app.use(cors());
//bodyParser must come before authRoutes and trackRoutes
app.use(bodyParser.json());
app.use(authRoutes);
app.use(router);

let PORT = process.env.PORT || 4000

//connection to mongoDB with token
const mongoURI = 'mongodb+srv://stacy125:fatherhoodIsLit@cluster0.w8kgz.mongodb.net/fatherhoodIsLit?retryWrites=true&w=majority';

let connectionString = "";

if (process.env.NODE_ENV === "production") {
    connectionString = process.env.DB_URL;
} else {
    connectionString = "mongodb://localhost/fatherhoodIsLit";
}

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('fatherhoodIsLit')
    })


MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('fatherhoodIsLit')
        const usersCollection = db.collection('users')
        const eventsCollection = db.collection('events')


        app.post('/users', (request) => {
            usersCollection.insertOne(request.body)
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.error(error))
        })

        app.post('/events', (req, res) => {
            eventsCollection.insertOne(req.body)
                .then(result => {
                    console.log(result)
                })
                .catch(error => console.error(error))
        })

        app.post('/users', (req, res) => {
            usersCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })

        app.post('/events', (req, res) => {
            eventsCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })

        app.get('/', (req, res) => {
            const usersCol = db.collection('users').find().pretty()
            console.log(usersCol)
            // ...
        })

        app.get('/', (req, res) => {
            const eventsCol = db.collection('events').find().pretty()
            console.log(eventsCol)
            // ...
        })

        app.use(bodyParser.json())

        app.listen(/* ... */)
    })


//This tells Express we’re using EJS as the template engine.
//place it before any app.use, app.get or app.post methods.
app.set('view engine', 'ejs')

//We will use the render method built into Express’s response
//view is the name of the file we’re rendering. This file must be placed inside a views folder.
//locals is the data passed into the file.

// With middleware
app.use('/', function (req, res, next) {
    res.render('users')
    next();
});

app.use('/', function (req, res, next) {
    res.render('events')
    next();
});

app.get('/', (req, res) => {
    db.collection('users').find().pretty()
        .then(results => {
            res.render('index.ejs', { users: response })
        })
})

app.get('/', (req, res) => {
    db.collection('events').find().pretty()
        .then(response => {
            res.render('index.ejs', { events: response })
        })
})


// MongoClient.connection.on('error', (error) => {
//     console.error("Error connecting to mongo", error);
// });


//get data making sure that token, email and password is correct and send the email
// app.get("/", requireAuth, (req, res) => {
//     res.send(`Your email: ${req.user.email}`);
// });
app.get('/test', (request, response) => {
    response.json("Hello")
})

app.listen(PORT, () => {
    console.log("listening on port");
})