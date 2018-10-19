const router = require("express").Router();
const URLController = require("../../controllers/URLController");

router.route("/")
    .post(URLController.create);

    module.exports = router;