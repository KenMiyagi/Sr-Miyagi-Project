const { questions } = require("../../db");

const updateQuestionsController = async (body, id) => {
  console.log(body, id);
  const updated = await questions.update(body, { where: { id: id } });

  if (updated) {
    const updatesQuestion = await questions.findOne({
      where: { id },
    });
    return updatesQuestion;
  }
  return false;
};

module.exports = {
  updateQuestionsController,
};
