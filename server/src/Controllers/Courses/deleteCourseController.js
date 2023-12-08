const { courses } = require("../../db")

const deleteCourseController = async (id) =>{
    const deletedCourse = await courses.destroy({
        where:{id}
    })
    if(deletedCourse) return true
    return false
}

module.exports= {
    deleteCourseController
}