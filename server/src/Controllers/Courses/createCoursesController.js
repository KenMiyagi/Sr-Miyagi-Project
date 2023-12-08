const {courses} =require("../../db")

const createCoursesController = async (body) =>{
    console.log(body)
    const {courseName} = body
    const [newCourse, created] = await courses.findOrCreate({
        where: {courseName},
        defaults: {...body}
    })
    if(created) return newCourse.dataValues
    return false
}

module.exports={
    createCoursesController
}