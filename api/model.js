'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    productId: {
        type: String,
        required: true,
        index: { 
            unique: true 
        }
    },
    category: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productModel: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) throw new Error("ERROR: Price cannot be Negative");
        }
    },
    availableQuantity: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error("ERROR: Quantity cannot be Negative");
        }
    }
});

module.exports = mongoose.model("model", ProductSchema);
