const {admin} = require("../../db")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {SIGNATURE} = process.env
const {CREATE_KEY} = process.env

const createAdminAccController = async (props, query) =>{
    const createKey = query.createKey
    const {password, email, name} = props
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const defaultProfilePicture = "https://res.cloudinary.com/da785kmjd/image/upload/v1695009407/unnamed_fum3we.png"
    if(createKey === CREATE_KEY){
        const [newAdmin, created] = await admin.findOrCreate({
            where: {email},
            defaults: {...props, password: hashedPassword, profilePicture: defaultProfilePicture}
        })
    
        if(created){
            newAdmin.password=0
            const newAdminFound = await admin.findOne({
                where:{id: newAdmin.id},
                /* include:[
                ] */
            })
            const tkn = newAdminFound.dataValues
            const token = jwt.sign({...tkn, password:0},SIGNATURE)

            return {token} // , token
        }
        return "used"
    }
    return "wrongKey"
}

module.exports = {
    createAdminAccController
}