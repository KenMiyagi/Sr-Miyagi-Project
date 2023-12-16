const { Router } = require("express");
const { userSignUpHandler, getUsersHandler, updateUserHandler, getUsersByIdHandler, deleteUserHandler, restoreUserHandler, getUserByNameHandler, updatePassUserHandler
} = require("../Handlers/userHandlers");
const router = Router();

router.post("/signup", userSignUpHandler);
router.get("/all", getUsersHandler);
router.patch("/update/:id", updateUserHandler);
router.get("/:id", getUsersByIdHandler);
router.delete("/:id", deleteUserHandler)
router.post("/restore/:id", restoreUserHandler);
router.get("/", getUserByNameHandler);
router.patch("/passUpdate/:id", updatePassUserHandler);

module.exports = router;

