const router = require("express").Router();
// this is not my brains, but from the books in Student React Router
const subjectController = require("../../controllers/subjectController");

// Matches with "/api/subject"
router.route("/")
  .get(subjectController.findAll)
  .post(subjectController.create);

// Matches with "/api/subject/:id"
router
  .route("/:id")
  .get(subjectController.findById)
  .put(subjectController.update)
  .delete(subjectController.remove);

module.exports = router;
