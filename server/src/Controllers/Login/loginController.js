const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {SIGNATURE} = process.env

const loginController = async (acc, password) =>{
    const validPassword = await bcrypt.compare(password, acc.password)
    if(!validPassword) {
        throw Error("Credenciales inválidas")
    }

    const token = jwt.sign(acc, SIGNATURE)
    acc.password=0
    return {token, acc}
}

module.exports= {
    loginController
}