const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    Subject: {
        type: String,
        trim: true,
        required: "Subject Title is Required"
    },
    // list of tutorials and links
});

const subject = mongoose.model("Subject", SubjectSchema);

module.exports = subject;