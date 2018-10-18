const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var tutorialSchema = new Schema({
  tutorialName: {
    type: String,
    trim: true,
    required: "Tutorial Name is Required"
    },
  tutor: {
    type: String,
    trim: true,
    },  
  series: {
    type: Boolean,
    required: "Is this part of a series?"
    },
  url: {
    type: String,
    required: true
    },
  useful: {
    type: Number,
    required: true,
    },
  notUseful: {
    type: Number,
    required: true
    },
  seriesId: {
    type: String,

    }
});

var Tutorial = mongoose.model ("Tutorial", tutorialSchema);

module.exports = Tutorial;