const { Router } = require("express");
const router = Router();
const { loginHandler } = require("../Handlers/loginHandlers")

const productsRoute = require("./productsRoute");
const questionsRoute = require("./questionsRoute");
const adminRoute = require("./adminRoute");
const userRoute = require("./userRoute");

router.use("/products", productsRoute);
router.use("/faqs", questionsRoute);
router.use("/admin", adminRoute);
router.use("/user", userRoute);
router.post("/login", loginHandler)

module.exports = router;
