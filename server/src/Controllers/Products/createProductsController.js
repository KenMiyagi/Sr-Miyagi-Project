const {products} =require("../../db")

const createProductsController = async (body) =>{
    console.log(body)
    const newProduct= await products.create({...body})
    if(newProduct) return newProduct.dataValues
    return false
}

module.exports={
    createProductsController
}