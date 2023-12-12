const { products } = require("../../db")

const deleteProductController = async (id) =>{
    const deletedProduct = await products.destroy({
        where:{id}
    })
    if(deletedProduct) return true
    return false
}

module.exports= {
    deleteProductController
}