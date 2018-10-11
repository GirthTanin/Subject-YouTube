// Not entirely sure how this works, but I'm terrible at keeping keys etc safe.
require("dotenv").config();

const express = require ("express");
// how does body parser work...
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");
const routes = require ("./routes");
const app = express();
const PORT = process.env.PORT || 1515;
 
//this is middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/subject-youtube"
);

app.listen(PORT, function() {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});
