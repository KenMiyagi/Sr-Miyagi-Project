const {products} =require("../../db")

const createBulkProductsController = async (body) =>{
    console.log(body);
    const newProduct = await products.bulkCreate(body)
    if(newProduct.length>0) return newProduct
    return false
}

module.exports={
    createBulkProductsController
}