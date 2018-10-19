const db = require("../models/URL");
const axios = require("axios");

module.exports = {
    create: function(request, response) {
        db.URL
            .create(request.body)
            .then(dbModel => response.json(dbModel))
            .catch(err => console.log(err));    
    }
}