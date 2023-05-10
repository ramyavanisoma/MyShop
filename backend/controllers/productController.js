import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

export const getProducts=asyncHandler(async(req,res)=>{
    const products=await Product.find({})
    res.json(products)
});

const getProductById=asyncHandler(async(req,res)=>{
    const products=await Product.findById(req.params.id)
    if(products){
        res.json(products)
    }else{
        res.status(404).json({message:'Product not found'})
    }
});

export {getProductById}
