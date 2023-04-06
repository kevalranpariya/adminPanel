const express = require('express');

const route = express.Router();

const productController = require('../controller/productController');


route.get('/add_product', productController.addProduct);

route.post('/subCategoryDataFound', productController.subCategoryDataFound)

module.exports = route;