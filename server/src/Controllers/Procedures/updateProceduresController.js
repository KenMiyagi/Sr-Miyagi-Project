const { procedures } = require("../../db");

const updateProceduresController = async (body, id) => {
  const updated = await procedures.update(body, { where: { id: id } });

  if (updated) {
    const updatedProcedure = await procedures.findOne({
      where: { id },
    });
    return updatedProcedure;
  }
  return false;
};

module.exports = {
  updateProceduresController,
};
