const { questions } = require("../../db")

const deleteQuestionController = async (id) =>{
    const deletedCourse = await questions.destroy({
        where:{id}
    })
    if(deletedCourse) return true
    return false
}

module.exports= {
    deleteQuestionController
}