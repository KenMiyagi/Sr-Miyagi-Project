const {courses} = require("../../db")

const getAllProductsController = async () =>{
    const allCourses = await courses.findAll()
    if(allCourses.length > 0) return allCourses
    return false
}

module.exports= {
    getAllProductsController
}