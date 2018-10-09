// Not entirely sure how this works, but I'm terrible at keeping keys etc safe.
require("dotenv").config();

const express = require ('express');
// do we want "path" as a const here also?  What is it's role?
const mongoose = require ("mongoose");
const routes = require ("./routes");
const app = express();
const PORT = process.env.PORT || 1515;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
