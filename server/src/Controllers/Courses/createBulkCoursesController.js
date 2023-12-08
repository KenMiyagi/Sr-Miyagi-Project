const {courses} =require("../../db")

const createBulkCoursesController = async (body) =>{
    const newCourses = await courses.bulkCreate(body)
    if(created) return newCourses
    return false
}

module.exports={
    createBulkCoursesController
}