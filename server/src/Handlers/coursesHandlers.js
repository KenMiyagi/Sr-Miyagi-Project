
const { createCoursesController } = require("../Controllers/Courses/createCoursesController")
const { getAllCoursesController } = require("../Controllers/Courses/getAllCoursesController")
const { updateCoursesController } = require("../Controllers/Courses/updateCoursesController")
const { deleteCourseController } = require("../Controllers/Courses/deleteCourseController")
const { getCourseByIdController } = require("../Controllers/Courses/getCourseByIdController")
const { createBulkCoursesController } = require("../Controllers/Courses/createBulkCoursesController")


const createCourseHandler = async (req, res) =>{
    try {
        const newCourse = await createCoursesController(req.body)
        if(newCourse) return res.status(200).json(newCourse)
        return res.status(400).json({error: "Course with the same name already exists."})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const createBulkCourseHandler = async (req, res) =>{
    try {
        const newCourse = await createBulkCoursesController(req.body)
        if(newCourse) return res.status(200).json(newCourse)
        return res.status(400).json({error: "Couldn't create the course chunk"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getAllCoursesHandler = async (req, res) =>{
    try {
        const courses = await getAllCoursesController()
        if(courses) return res.status(200).json(courses)
        return res.status(400).json({error: "There is no courses."})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getCourseByIdHandler = async (req, res) =>{
    try {
        const course = await getCourseByIdController(req.params.id)
        if(course) return res.status(200).json(course)
        return res.status(400).json({error:"The course couldn't be found"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const updateCoursesHandler = async (req, res) =>{
    try {
        const courses = await updateCoursesController(req.body, req.params.id)
        if(courses) return res.status(200).json(courses)
        return res.status(400).json({error:"Couldn't update the course."})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const deleteCourseHandler = async (req, res) =>{
    try {
        deletedCourse = await deleteCourseController(req.params.id)
        if(deletedCourse) return res.status(200).json({message: "The course has been removed"})
        return res.status(400).json({error:"The course doesn't exist"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports={
    createCourseHandler,
    createBulkCourseHandler,
    getAllCoursesHandler,
    getCourseByIdHandler,
    updateCoursesHandler,
    deleteCourseHandler
}