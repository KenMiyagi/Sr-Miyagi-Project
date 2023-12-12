
const { createProductsController } = require("../Controllers/Products/createProductsController")
const { getAllProductsController } = require("../Controllers/Products/getAllProductsController")
const { updateProductsController } = require("../Controllers/Products/updateProductsController")
const { deleteProductController } = require("../Controllers/Products/deleteProductController")
const { getProductByIdController } = require("../Controllers/Products/getProductByIdController")
const { createBulkProductsController } = require("../Controllers/Products/createBulkProductsController")


const createProductHandler = async (req, res) =>{
    try {
        const newCourse = await createProductsController(req.body)
        if(newCourse) return res.status(200).json(newCourse)
        return res.status(400).json({error: "Course with the same name already exists."})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const createBulkProductHandler = async (req, res) =>{
    try {
        const newCourse = await createBulkProductsController(req.body)
        if(newCourse) return res.status(200).json(newCourse)
        return res.status(400).json({error: "Couldn't create the course chunk"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getAllProductsHandler = async (req, res) =>{
    try {
        const courses = await getAllProductsController()
        if(courses) return res.status(200).json(courses)
        return res.status(400).json({error: "There is no courses."})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getProductByIdHandler = async (req, res) =>{
    try {
        const course = await getProductByIdController(req.params.id)
        if(course) return res.status(200).json(course)
        return res.status(400).json({error:"The course couldn't be found"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const updateProductsHandler = async (req, res) =>{
    try {
        const courses = await updateProductsController(req.body, req.params.id)
        if(courses) return res.status(200).json(courses)
        return res.status(400).json({error:"Couldn't update the course."})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const deleteProductHandler = async (req, res) =>{
    try {
        deletedCourse = await deleteProductController(req.params.id)
        if(deletedCourse) return res.status(200).json({message: "The course has been removed"})
        return res.status(400).json({error:"The course doesn't exist"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports={
    createProductHandler,
    createBulkProductHandler,
    getAllProductsHandler,
    getProductByIdHandler,
    updateProductsHandler,
    deleteProductHandler
}