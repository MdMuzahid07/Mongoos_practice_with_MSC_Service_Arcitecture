const Product = require("../models/Product");

const { getProductsService, postProductsService } = require("../services/product.services");

exports.getProducts = async (req, res, next) => {
    try {
        // const products = await Product.find({ _id: "633714b5239bd532448376e2" });

        const products = await postProductsService;

        // we can query data easily by mongoose querying system
        // const products = await product.where("name").equals(/\w/).where("quantity").gt(100).lt(500)

        res.status(200).json({
            status: true,
            data: products
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Data not found!",
            error: error.message
        })
    }
};




exports.postProducts = async (req, res, next) => {

    try {
        res.send("Product posted successfully");

        // we can save or create data in database

        result.logger();

        // save
        // const product = new Product(req.body);

        //instance creation => do something => save()
        // if (product.quantity == 0) {
        //   product.status = "out-of-stock"
        // }
        const result = await getProductsService(req.body);




        // create
        // const product = req.body;
        // const result = await Product.create(req.body);

        res.status(200).send({
            status: "Success",
            message: "Data inserted successfully",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Data is not inserted",
            error: error.message
        });
    }

};



