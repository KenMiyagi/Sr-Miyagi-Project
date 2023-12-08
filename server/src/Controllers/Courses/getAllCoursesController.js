const {courses} = require("../../db")

const getAllCoursesController = async () =>{
    const allCourses = await courses.findAll()
    if(allCourses.length > 0) return allCourses
    return false
}

module.exports= {
    getAllCoursesController
}