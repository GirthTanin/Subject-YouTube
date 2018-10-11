const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/Subject-YouTube");
const javaScriptSeed = [{
    //look in 20-react day 2 activity 11 in the scripts folder
}]