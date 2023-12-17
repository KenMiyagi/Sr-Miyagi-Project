const {admin} = require("../../db")
const bcrypt = require("bcryptjs");
const {CREATE_KEY} = process.env

const updateAdminController = async (props, id) =>{
    const {password, createKey} = props
    const hashedPassword = props?.password && CREATE_KEY === createKey ? await bcrypt.hash(props?.password, saltRounds) : "pw-error"
    if(hashedPassword==="pw-error") throw Error("You don't have enough permission to change passwords")
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