const {user} = require("../../db")
const { Op } = require('sequelize')

const getUsersController = async (value) =>{

     if(value === "deleted"){
                const usersDeleted = await user.findAll({
                    paranoid:false,
                    where: {deletedAt:{
                        [Op.ne]: null
                      }}
                })
                return usersDeleted
     }else if(value!=="deleted"){
        const users = await user.findAll()
        if(users.length > 0){
            for(let i = 0; i<users.length ; i++){
                users[i].password=0
            }
        return users;
     }
    }return []
    
}

module.exports = {
    getUsersController
}