const { Router } = require("express");
const router = Router();

const productsRoute = require("./productsRoute");
const questionsRoute = require("./questionsRoute");
const proceduresRoute = require("./proceduresRoute");

router.use("/products", productsRoute);
router.use("/faqs", questionsRoute);
router.use("/procedures", proceduresRoute);

module.exports = router;
