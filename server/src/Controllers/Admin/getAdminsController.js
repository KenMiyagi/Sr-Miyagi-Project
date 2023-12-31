const {admin} = require("../../db")
const { Op } = require('sequelize')

const getAdminsController = async (value) =>{
    if(value === "deleted"){
        const adminsDeleted = await admin.findAll({
            paranoid: false,
            where: {deletedAt:{
                [Op.ne]: null
                }},
        })

        if(adminsDeleted.length > 0){
            for(let i = 0; i<adminsDeleted.length ; i++){
                adminsDeleted[i].password=0
            } 
            return adminsDeleted
        }return []
    }else if(value!=="deleted"){
        const admins = await admin.findAll({
        })
        if(admins.length > 0){
            for(let i = 0; i<admins.length ; i++){
                admins[i].password=0
            } 
            return admins
        }return []
    }
}

module.exports = {
    getAdminsController
}