require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
//bodyParser must come before authRoutes and trackRoutes
app.use(bodyParser.json());
app.use(authRoutes);


//connection to mongoDB with token
const mongoURI = 'mongodb+srv://stacy:udemytracker@cluster0.9wdeo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoURI)
mongoose.connection.on('connected', () => {
    console.log("Connected to mongo instance");
});

mongoose.connection.on('error', (error) => {
    console.error("Error connecting to mongo", error);
});

//get data making sure that token, email and password is correct and send the email
app.get("/", requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});
// confirms server is listening
app.listen(3000, () => {
    console.log("Listening on port 3000");
})
