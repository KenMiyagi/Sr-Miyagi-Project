const { products } = require("../../db");

const updateProductsController = async (body, id) => {
  const updated = await products.update(body, { where: { id: id } });

  if (updated) {
    const updatedProduct = await products.findOne({
      where: { id },
    });
    return updatedProduct;
  }
  return false;
};

module.exports = {
  updateProductsController,
};
