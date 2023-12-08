const {courses} = require("../../db")

const getCourseByIdController = async (id) =>{
    const course = await courses.findOne({
        where: {id}
    })
    if(course) return course
    return false
}

module.exports = {
    getCourseByIdController
}