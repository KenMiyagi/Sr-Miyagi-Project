const { procedures } = require("../../db")

const deleteProcedureController = async (id) =>{
    const deletedProcedure = await procedures.destroy({
        where:{id}
    })
    if(deletedProcedure) return true
    return false
}

module.exports= {
    deleteProcedureController
}