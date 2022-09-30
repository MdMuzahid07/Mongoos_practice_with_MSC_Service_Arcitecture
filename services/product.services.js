const Product = require("../models/Product");

exports.getProductsService = async (data) => {
    const allProducts = await Product.save(data);
    return allProducts;
}


exports.postProductsService = async () => {
    const products = await Product.findById({});
    return products;
};



