const {user} = require("../../db")

const getFreelancersController = async () =>{
    const freelancers = await user.findAll({
        where:{
            freelancer:true
        },
    })
    if(freelancers.length >0) return freelancers
    throw Error("There is no freelancers")
}

module.exports={
    getFreelancersController
}