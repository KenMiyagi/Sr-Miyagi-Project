const {products} = require("../../db")

const getAllProductsController = async () =>{
    const allProducts = await products.findAll()
    if(allProducts.length > 0) return allProducts
    return false
}

module.exports= {
    getAllProductsController
}