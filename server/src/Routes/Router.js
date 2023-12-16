const { Router } = require("express");
const router = Router();

const productsRoute = require("./productsRoute");
const questionsRoute = require("./questionsRoute");
const adminRoute = require("./adminRoute");

router.use("/products", productsRoute);
router.use("/faqs", questionsRoute);
router.use("/admin", adminRoute);

module.exports = router;
