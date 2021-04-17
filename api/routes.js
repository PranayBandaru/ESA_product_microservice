'use strict';
module.exports = function(app) {
    var productList = require('./controller');

    app
    .route("/rest/v1/products")
    .get(productList.listOfProducts)
    .post(productList.createProduct);

    app
    .route("/rest/v1/products/:id")
    .put(productList.updateProduct)
    .delete(productList.deleteProduct);
};
