// Not entirely sure how this works, but I'm terrible at keeping keys etc safe.
require("dotenv").config();

const express = require ('express');

const app = express();

//set up view engine
app.set('view engine', 'ejs');

//create home route
app.get('/', (req, res)=> {
    res.render('home');
});


const authRoutes = require('/routes/auth-routes');

// how does body parser work...
//const bodyParser = require("body-parser");
const mongoose = require ("mongoose");
const routes = require ("./routes");
const app = express();
const passport = require("passport");
const PORT = process.env.PORT || 3000;
 
//set up routes
app.use('/auth', authRoutes);
 
//this is middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

// Passport Routes
require("./routes/AuthRoutes.js")(app, passport);
require("./routes/apiRoutes")(app, passport);
require("./routes/htmlRoutes")(app, passport);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true! //test from project 2
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

require("./config/passport/passport.js")(passport, db.user);S

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/subject-youtube"
);

app.listen(3000, () => {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});
