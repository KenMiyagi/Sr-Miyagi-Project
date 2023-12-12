const {products} = require("../../db")

const getProductByIdController = async (id) =>{
    const product = await products.findOne({
        where: {id}
    })
    if(product) return product
    return false
}

module.exports = {
    getProductByIdController
}