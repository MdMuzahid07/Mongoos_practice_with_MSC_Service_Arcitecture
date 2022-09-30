const express = require('express');
const { getProducts, postProducts } = require('../../controllers/product.controller');
const router = express.Router();

router.route("/")
    .get(getProducts)
    .post(postProducts)