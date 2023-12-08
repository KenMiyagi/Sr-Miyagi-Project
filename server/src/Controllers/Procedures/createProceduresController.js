const { procedures } = require("../../db");

const createProceduresController = async (body) => {
  const { name } = body;
  const [newProcedure, created] = await procedures.findOrCreate({
    where: { name },
    defaults: { ...body },
  });
  if (created) return newProcedure.dataValues;
  return false;
};

module.exports = {
  createProceduresController,
};
