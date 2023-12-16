const { Router } = require("express");
const {adminSignUpHandler, getAdminsHandler, updateAdminHandler, getAdminsByIdHandler, deleteAdminHandler, restoreAdminHandler} = require('../Handlers/adminHandlers')
const router = Router()

router.post("/signup", adminSignUpHandler);
router.get("/all", getAdminsHandler);
router.patch("/update/:id", updateAdminHandler);
router.get("/:id", getAdminsByIdHandler);
router.delete("/:id", deleteAdminHandler)
router.post("/restore/:id", restoreAdminHandler)

module.exports = router