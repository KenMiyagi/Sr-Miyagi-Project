const {admin} = require("../../db")
const bcrypt = require("bcryptjs");
const {CREATE_KEY} = process.env

const updateAdminController = async (props, id) =>{
    const {password, createKey} = props
    const saltRounds = 10
    
    const hashedPassword = props?.password ? await bcrypt.hash(props?.password, saltRounds) : null
    if(hashedPassword && CREATE_KEY !== createKey){
        throw Error("You don't have enough permission to change passwords")
    }
    
    const foundAdmin = await admin.findByPk(id);
    const oldPassword = foundAdmin.dataValues.password;
    if(password){
        const validPassword = await bcrypt.compare(password, oldPassword)
        if(validPassword){
            throw Error("La contraseña es igual a la anterior")
        }
    }
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