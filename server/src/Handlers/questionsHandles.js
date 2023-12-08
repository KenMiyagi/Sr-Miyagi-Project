const { createQuestionsController } = require("../Controllers/Questions/createQuestionsController")
const { getAllQuestionsController } = require("../Controllers/Questions/getAllQuestionsController")
const { updateQuestionsController } = require("../Controllers/Questions/updateQuestionsController")
const { getQuestionByIdController } = require("../Controllers/Questions/getQuestionByIdController")
const { deleteQuestionController } = require("../Controllers/Questions/deleteQuestionController")

const createQuestionHandler = async (req, res) =>{
    try {
        const newQuestion = await createQuestionsController(req.body)
        if(newQuestion) return res.status(200).json(newQuestion)
        return res.status(400).json({error: "Course with the same name already exists."})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getAllQuestionsHandler = async (req, res) =>{
    try {
        const courses = await getAllQuestionsController()
        if(courses) return res.status(200).json(courses)
        return res.status(400).json({error: "There is no FAQs."})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getQuestionByIdHandler = async (req, res) =>{
    try {
        const course = await getQuestionByIdController(req.params.id)
        if(course) return res.status(200).json(course)
        return res.status(400).json({error:"The course couldn't be found"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const updateQuestionsHandler = async (req, res) =>{
    try {
        const courses = await updateQuestionsController(req.body, req.params.id)
        if(courses) return res.status(200).json(courses)
        return res.status(400).json({error:"Couldn't update the course."})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const  deleteQuestionHandler = async (req, res) =>{
    try {
        deletedCourse = await deleteQuestionController(req.params.id)
        if(deletedCourse) return res.status(200).json({message: "The question has been removed"})
        return res.status(400).json({error:"The question doesn't exist"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = {
    createQuestionHandler,
    getAllQuestionsHandler,
    getQuestionByIdHandler,
    updateQuestionsHandler,
    deleteQuestionHandler
}