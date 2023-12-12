const { courses } = require("../../db");

const updateProductsController = async (body, id) => {
  const updated = await courses.update(body, { where: { id: id } });

  if (updated) {
    const updatedCourse = await courses.findOne({
      where: { id },
    });
    return updatedCourse;
  }
  return false;
};

module.exports = {
  updateProductsController,
};
