const {questions} =require("../../db")

const createQuestionsController = async (body) =>{
    const {question} = body
    const [newQuestion, created] = await questions.findOrCreate({
        where: {question},
        defaults: {...body}
    })
    if(created) return newQuestion.dataValues
    return false
}

module.exports={
    createQuestionsController
}