// Not entirely sure how this works, but I'm terrible at keeping keys etc safe.
require("dotenv").config();

const express = require ("express");

// body parser is going to chop up just the stuff that needs to be updated
const bodyParser = require("body-parser");
// this will be the guy that takes and brings everything from mongo
const mongoose = require ("mongoose");

// this will create the traffic cop to direct everything and be the gatekeeper
const routes = require ("./routes");

// this is all the authentication
const passport = require("passport");
const PORT = process.env.PORT || 1515;
const app = express();

//this is middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

// Passport Routes
// require("./routes/AuthRoutes.js")(app, passport);
// require("./routes/apiRoutes")(app, passport);
// require("./routes/htmlRoutes")(app, passport);

// var syncOptions = { force: false };

// If running a test, set syncOptions.force to true! //test from project 2
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// require("./config/passport/passport.js")(passport, db.user);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/subject-youtube"
);

mongoose.Promise = Promise;

app.listen(PORT, function() {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});
