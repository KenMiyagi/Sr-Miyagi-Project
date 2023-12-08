const { Router } = require("express");
const { createCourseHandler,createBulkCourseHandler, getAllCoursesHandler,getCourseByIdHandler, updateCoursesHandler, deleteCourseHandler } = require("../Handlers/coursesHandlers")
const router = Router();

router.get("/",getAllCoursesHandler)
router.get("/:id",getCourseByIdHandler)
router.patch("/:id",updateCoursesHandler)
router.post("/",createCourseHandler)
router.post("/bulk",createBulkCourseHandler)
router.delete("/:id",deleteCourseHandler)

module.exports = router;
