const {questions} = require("../../db")

const getQuestionByIdController = async (id) =>{
    const question = await questions.findOne({
        where: {id}
    })
    if(question) return question
    return false
}

module.exports = {
    getQuestionByIdController
}