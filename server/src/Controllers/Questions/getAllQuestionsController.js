const {questions} = require("../../db")

const getAllQuestionsController = async () =>{
    const allQuestions = await questions.findAll()
    if(allQuestions.length > 0) return allQuestions
    return false
}

module.exports= {
    getAllQuestionsController
}