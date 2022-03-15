

require("./models/User");
require('./models/Events');
let router = require('./router')
let cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");
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
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log("Connected to mongo instance");
});

mongoose.connection.on('error', (error) => {
    console.error("Error connecting to mongo", error);
});


let connectionString = "";

if (process.env.NODE_ENV === "production") {
    connectionString = process.env.DB_URL;
} else {
    connectionString = "mongodb://localhost/fatherhoodIsLit";
}
// mongoose.connect(connectionString, mongooseConnectionConfig)



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