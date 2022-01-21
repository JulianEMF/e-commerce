import express from 'express';
// express-async-handler handles the denied requests or any request that goes wrong
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

// @dec This route fetch all products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler (async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

// @dec This route fetch a single product
// @route GET /api/product
// @access Public
router.get('/:id', asyncHandler (async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log("The id is: " + req.params.id)
    if(product){
        res.json(product);
    }else{
        res.status(404);
        throw new Error('Product not found');
    }
}));

export default router;