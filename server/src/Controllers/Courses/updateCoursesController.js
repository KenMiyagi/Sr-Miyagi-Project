const { courses } = require("../../db");

const updateCoursesController = async (body, id) => {
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
  updateCoursesController,
};
