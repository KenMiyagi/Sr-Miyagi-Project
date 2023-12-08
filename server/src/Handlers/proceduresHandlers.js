
const { createProceduresController } = require("../Controllers/Procedures/createProceduresController")
const { getAllProceduresController } = require("../Controllers/Procedures/getAllProceduresControles")
const { updateProceduresController } = require("../Controllers/Procedures/updateProceduresController")
const { deleteProcedureController } = require("../Controllers/Procedures/deleteProcedureController")
const { getProcedureByIdController } = require("../Controllers/Procedures/getProcedureByIdController")


const createProcedureHandler = async (req, res) =>{
    try {
        const newProcedure = await createProceduresController(req.body)
        if(newProcedure) return res.status(200).json(newProcedure)
        return res.status(400).json({error: "Procedure with the same name already exists."})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getAllProceduresHandler = async (req, res) =>{
    try {
        const procedure = await getAllProceduresController()
        if(procedure) return res.status(200).json(procedure)
        return res.status(400).json({error: "There is no procedures."})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getProcedureByIdHandler = async (req, res) =>{
    try {
        const procedure = await getProcedureByIdController(req.params.id)
        if(procedure) return res.status(200).json(procedure)
        return res.status(400).json({error:"The procedure couldn't be found"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const updateProceduresHandler = async (req, res) =>{
    try {
        const procedure = await updateProceduresController(req.body, req.params.id)
        if(procedure) return res.status(200).json(procedure)
        return res.status(400).json({error:"Couldn't update the procedure."})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const deleteProcedureHandler = async (req, res) =>{
    try {
        deletedProcedure = await deleteProcedureController(req.params.id)
        if(deletedProcedure) return res.status(200).json({message: "The procedure has been removed"})
        return res.status(400).json({error:"The procedure doesn't exist"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports={
    createProcedureHandler,
    getAllProceduresHandler,
    getProcedureByIdHandler,
    updateProceduresHandler,
    deleteProcedureHandler
}