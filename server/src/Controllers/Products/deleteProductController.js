const { courses } = require("../../db")

const deleteProductController = async (id) =>{
    const deletedCourse = await courses.destroy({
        where:{id}
    })
    if(deletedCourse) return true
    return false
}

module.exports= {
    deleteProductController
}