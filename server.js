'use strict'
//Connect to MongoDB Database
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@cluster0.at51m.mongodb.net/Product_microservice?retryWrites=true&w=majority",
    {useNewUrlParser:  true,
    useFindAndModify: false,
    useUnifiedTopology:  true,}).then(() => {
        console.log("Connected to Database");
}, 
err => {
    {
        console.log("Error: ", err);
    }
});

const express = require("express");
const app = express();
var routes = require('./api/routes'); 
const port = 3000;
app.use(express.json());

routes(app);
app.get('/', (req, res) => {
    res.send("Product Microservice");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
