const {admin} = require("../../db")
const bcrypt = require("bcryptjs");

const updateAdminController = async (props, id) =>{
    const {password} = props
    const hashedPassword = props?.password ? await bcrypt.hash(props?.password, saltRounds) : null
    const updated = await admin.update(
        password ? {...props,password : hashedPassword}: props,{where:{id}})
    if(updated){
        const updatedAdmin = await admin.findOne({where:{id}})
        return updatedAdmin
    } throw Error("Something went wrong")
}

module.exports = {
    updateAdminController
}