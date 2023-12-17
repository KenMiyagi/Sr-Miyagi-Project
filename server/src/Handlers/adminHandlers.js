const {createAdminAccController} = require('../Controllers/Admin/createAdminAccController')
const  {getAdminsController} = require('../Controllers/Admin/getAdminsController')
const  {updateAdminController} = require("../Controllers/Admin/updateAdminController")
const {getAdminsByIdController} = require("../Controllers/Admin/getAdminsByIdController")
const {deleteAdminController} = require("../Controllers/Admin/deleteAdminController")
const {restoreAdminController} = require("../Controllers/Admin/restoreAdminController")

const { getUserAccController } = require("../Controllers/User/getUserAccController")

const adminSignUpHandler = async (req, res)=>{
    try {
        const userAccount = await getUserAccController(req.body.email)
        if (userAccount) return res.status(400).json({error: "Email in use"})

        const token = await createAdminAccController(req.body, req.query)
        if(token === "used") return res.status(400).json({error: "Email in use"})
        if(token === "wrongKey") return res.status(400).json({error: "Wrong create key"})
        res.status(200).json(token)
    } catch (error) {
        if(error.message=== "Validation Error") return res.status(400).json({error: "Used account"})
        res.status(500).json(error.message)
    }
}

const getAdminsHandler = async (req, res) =>{
    try {
        const {value} = req.query
        const admins = await getAdminsController(value)
        res.status(200).json(admins)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateAdminHandler = async (req, res) =>{
    try {
        const {id} = req.params
        const updated = await updateAdminController(req.body, id)
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getAdminsByIdHandler = async (req, res) =>{
    try {
        const {id} = req.params
        const admins = await getAdminsByIdController(id)
        res.status(200).json(admins)
    } catch (error) {
        res.status(200).json({error:error.message})
    }
}

const deleteAdminHandler = async (req, res) =>{
    try {
        const {id} = req.params
        const deleted = await deleteAdminController(id)
        if(deleted) return res.status(200).json({message: deleted})
        return res.status(400).json({error: "Admin not found"})
    } catch (error) {
        res.status(200).json({error:error.message})
    }
}

const restoreAdminHandler = async (req, res) => {
    try {
        const {id} = req.params
        const restored = await restoreAdminController(id)
        if(restored) return res.status(200).json(restored)
        return res.status(400).json({error: "Admin not found"})
    } catch (error) {
        res.status(200).json({error:error.message})
    }
}

module.exports={
    adminSignUpHandler,
    getAdminsHandler,
    updateAdminHandler,
    getAdminsByIdHandler,
    deleteAdminHandler,
    restoreAdminHandler
}