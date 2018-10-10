const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    userFirstName: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },
    userLastName: {
        type: String,
        trim: true,
        required: "Last Name is Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function(input) {
                return input.length >=6;
            }, "Password must be 6 characters."
        ]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
    // Here I would love to have also a way to interact with client side history and have a record of the users' interests, and also-
    // 1: watched tutorials, 2: Contributions added, 3: Saved tutorials, 4: Videos voted to be deleted or moved.
});

var User = mongoose.model("User", UserSchema);

module.exports = User;