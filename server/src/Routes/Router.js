const { Router } = require("express");
const router = Router();

const coursesRoute = require("./coursesRoute");
const questionsRoute = require("./questionsRoute");
const proceduresRoute = require("./proceduresRoute");

router.use("/courses", coursesRoute);
router.use("/faqs", questionsRoute);
router.use("/procedures", proceduresRoute);

module.exports = router;
