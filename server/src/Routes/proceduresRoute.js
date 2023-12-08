const { Router } = require("express");
const { getAllProceduresHandler, getProcedureByIdHandler, updateProceduresHandler, createProcedureHandler, deleteProcedureHandler} = require("../Handlers/proceduresHandlers")
const router = Router();


router.get("/",getAllProceduresHandler)
router.get("/:id",getProcedureByIdHandler)
router.patch("/:id",updateProceduresHandler)
router.post("/",createProcedureHandler)
router.delete("/:id",deleteProcedureHandler) 

module.exports = router