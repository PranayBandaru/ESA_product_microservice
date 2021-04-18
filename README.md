# ESA_product_microservice
 An E-commerce back-end microservice designed to facilitate product/inventory management needs of a business.
 
## Technologies used:
 Node.js
 ExpressJS
 Database: MongoDB
 
## Lisence
 This project is licensed under the Apache License 2.0.
 A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
 <p align="center"> Copyright (c) 2021 Pranay Bandaru. All rights reserved.</p>

## Instructions to setup
Run the commands below in a terminal in the project directory.
```bash

$ npm install
$ npm install mongoose
```
The project includes the connection string to my MongoDB database. To use your own database create a database in your MongoDB cluster and obtain a connection string. 
Use this connection string in place if mine in the server.js file.

To run the service run the below command in a terminal in the project directory.
```bash
$ node server.js
```

This API can be either used with your service or can be tested using postman using the following.

#### To Create a new product
This will create a new product in the database.
This API will not be exposed to the client, only to admin.

- Method – POST
- Route – http://localhost:3000/rest/v1/products

Example request body:
```bash
{
    "productId": "123245ds4234",
    "category": "TV",
    "productName": "Sony",
    "productModel": "Bravia",
    "price": 1200,
    "availableQuantity": 6
}
```

Example successful response:
```bash
{
    "availableQuantity": 6,
    "_id": "607473b0a3e93b68f3e5ea88",
    "productId": "123245ds4234",
    "category": "TV",
    "productName": "Sony",
    "productModel": "Bravia",
    "price": 1200,
    "__v": 0
}
```
The added product details can also be seen in the terminal.

#### Retrieve list of products
This will list all the available products in the database.

- Method – GET
- Route – http://localhost:3000/rest/v1/products

Example successful response:
```bash
[
    {
        "availableQuantity": 10,
        "_id": "60730d1db4e27351a5a3b3ab",
        "productId": "12445dsd234",
        "category": "Modile",
        "productName": "Samsung",
        "productModel": "Galaxy Note",
        "price": 700,
        "__v": 0
    },
    {
        "availableQuantity": 6,
        "_id": "607473b0a3e93b68f3e5ea88",
        "productId": "123245ds4234",
        "category": "TV",
        "productName": "Sony",
        "productModel": "Bravia",
        "price": 1200,
        "__v": 0
    }
]
```

#### Update a product
This will find a product by provided id and will update that product in the database.

- Method – PUT
- Route – http://localhost:3000/rest/v1/products/<product-id>

Example request body:
```bash
{
    "productId": "123245ds4234",
    "category": "TV",
    "productName": "Sony",
    "productModel": "Bravia",
    "price": 1200,
    "availableQuantity": 4
}
```

Example successful response:
```bash
{
    "availableQuantity": 4,
    "_id": "607473b0a3e93b68f3e5ea88",
    "productId": "123245ds4234",
    "category": "TV",
    "productName": "Sony",
    "productModel": "Bravia",
    "price": 1200,
    "__v": 0
}
```

#### Delete a product
This will find a product by provided id param and will delete that product in the database.

- Method – DELETE
- Route – http://localhost:3000/rest/v1/products/<product-id>

Example successful response:
```bash
{
    "message": "Product successfully deleted."
}
```

