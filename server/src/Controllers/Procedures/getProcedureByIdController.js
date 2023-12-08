const {procedures} = require("../../db")

const getProcedureByIdController = async (id) =>{
    const foundProcedure = await procedures.findOne({
        where: {id}
    })
    if(foundProcedure) return foundProcedure
    return false
}

module.exports = {
    getProcedureByIdController
}