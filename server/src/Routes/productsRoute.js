const { Router } = require("express");
const { createProductHandler,createBulkProductHandler, getAllProductsHandler,getProductByIdHandler, 
    updateProductsHandler, deleteProductHandler } = require("../Handlers/productsHandlers")
const router = Router();

router.get("/",getAllProductsHandler)
router.get("/:id",getProductByIdHandler)
router.patch("/:id",updateProductsHandler)
router.post("/",createProductHandler)
router.post("/bulk",createBulkProductHandler)
router.delete("/:id",deleteProductHandler)

module.exports = router;
