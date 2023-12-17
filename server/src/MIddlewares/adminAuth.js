const jwt = require("jsonwebtoken");

const adminAuthMiddleware = (req, res, next) =>{
    try {
        const authHeaders = req.headers["auth"]
        const token = (authHeaders && authHeaders.includes("Bearer")) ? authHeaders.split(" ")[1].trim() : authHeaders.trim()
        if(!token) return res.status(401).json({error:"Not logged in."})

        jwt.verify(token, process.env.SIGNATURE, (err,user)=>{
            if(err) return res.status(403).json({error:err})
            if(user.role==="admin"){
                req.user = user; next()
            }else{
                return res.status(401).json({error:"You don't have permission to do that."})
            }
        })
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports={
    adminAuthMiddleware
}