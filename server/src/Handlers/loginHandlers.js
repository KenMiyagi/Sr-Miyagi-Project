const { getAdminAccController } = require("../Controllers/Admin/getAdminAccController")
const { getUserAccController } = require("../Controllers/User/getUserAccController")
const { loginController } = require("../Controllers/Login/loginController")

const loginHandler = async (req, res) =>{
    const {email, password, google} = req.body
    try {
        if(google==="xd"){

        }else{
        const adminAcc = await getAdminAccController(email.toLowerCase())
        if(adminAcc){
            let {token, acc} = await loginController(adminAcc.dataValues, password)
            if(token){
                if(acc.ban.isBan!==true) return res.status(200).json({token})
                return res.status(400).json({error: "Usuario bloqueado"})
                }
        }
        const userAcc = await getUserAccController(email.toLowerCase())
        if(userAcc){
            let {token, acc} = await loginController(userAcc.dataValues, password)
            if(token){
                if(acc.ban.isBan!==true) return res.status(200).json({token})
                return res.status(400).json({error: "Usuario bloqueado"})
            }
        }
        return res.status(404).json({error: "Usuario o contraseña inválidos"})
        }
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports={
    loginHandler
}