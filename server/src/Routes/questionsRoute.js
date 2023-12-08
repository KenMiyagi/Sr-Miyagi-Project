const { Router } = require("express");
const { getAllQuestionsHandler, getQuestionByIdHandler, updateQuestionsHandler, createQuestionHandler, deleteQuestionHandler } = require("../Handlers/questionsHandles")
const router = Router();

router.get("/",getAllQuestionsHandler)
router.get("/:id",getQuestionByIdHandler)
router.patch("/:id",updateQuestionsHandler)
router.post("/",createQuestionHandler)
router.delete("/:id",deleteQuestionHandler)

module.exports = router