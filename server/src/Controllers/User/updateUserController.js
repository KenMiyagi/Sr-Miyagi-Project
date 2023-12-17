const {user} = require("../../db")
const bcrypt = require("bcryptjs");
const {CREATE_KEY} = process.env

const updateUserController = async (props, id) =>{
    const {password, createKey} = props
    const saltRounds = 10;
    
    const hashedPassword = props?.password ? await bcrypt.hash(props.password, saltRounds) : null
    if(hashedPassword && CREATE_KEY !== createKey){
        throw Error("You don't have enough permission to change passwords")
    }
    const foundUser = await user.findByPk(id);
    const oldPassword = foundUser.dataValues.password;
    if(password){
        const validPassword = await bcrypt.compare(password, oldPassword)
        if(validPassword){
            throw Error("La contraseña es igual a la anterior")
        }
    }
    const updated = await user.update(
        password ? {...props,password : hashedPassword}: props, {where : {id}})
    if(updated){
        const updatedUser = user.findOne({where:{id}})
        return updatedUser
    }throw Error("Something went wrong")
}

module.exports = {
    updateUserController
}