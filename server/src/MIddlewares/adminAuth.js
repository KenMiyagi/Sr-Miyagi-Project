const jwt = require("jsonwebtoken");

const adminAuthMiddleware = (req, res, next) =>{
    try {
        const authHeaders = req.headers["Auth"]
        const token = authHeaders && authHeaders.split(" ")[1]
        if(!token) return res.status(401).json({error:"Not logged in."})

        jwt.verify(token, process.env.SIGNATURE, (err,user)=>{
            if(err) return res.status(403).json({error:err})
            if(user.role==="admin"){
                req.user = user; next()
            } return res.status(401).json({error:"You don't have permission to do that."})
        })
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports={
    adminAuthMiddleware
}