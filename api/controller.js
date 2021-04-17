const Product = require("./model");

exports.listOfProducts = async (req, res) => { 
    await Product.find({}, (err, product) => {
        if (err) {
            res.status(500).send(err);
            console.log("ERROR:404");
        }
        res.status(200).json(product);
        console.log("All products listed");
    });
};

exports.createProduct = async (req, res) => {
    let newProduct = new Product (req.body);
    await newProduct.save ((err, product) => {
        if (err) {
            res.status(500).send(err);
            console.log("ERROR:404");
        }
        res.status(201).json(product);
        console.log("Added"+product);
    });
};

exports.updateProduct = async (req, res) => {
    await Product.findOneAndUpdate({ productId: req.params.id }, req.body, { new: true }, (err, product) => {
    if (err) {
        res.status(500).send(err);
        console.log("ERROR:500");
    }
        res.status(200).json(product);
        console.log("Updated" + product);
    });
};    

exports.deleteProduct = async (req, res) => {
    await Product.deleteOne({ productId: req.params.id }, (err) => {
        if (err) {
            console.log("ERROR:404");
            return res.status(404).send(err);
        }
        res.status(200).json({ message: "Product successfully deleted."});
        console.log("Deleted"  +req.params.id)
    });
};
