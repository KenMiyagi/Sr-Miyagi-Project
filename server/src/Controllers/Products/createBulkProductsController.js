const {products} =require("../../db")

const createBulkProductsController = async (body) =>{
    const newProduct = await products.bulkCreate(body)
    if(created) return newProduct
    return false
}

module.exports={
    createBulkProductsController
}