const { procedures } = require("../../db");

const getAllProceduresController = async () => {
  const allProcedures = await procedures.findAll();
  if (allProcedures.length > 0) return allProcedures;
  return false;
};

module.exports = {
  getAllProceduresController,
};
