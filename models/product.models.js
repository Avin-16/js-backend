import mongoose from "mongoose";
import { Category } from "./category.models";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    
    description :{
        type:String,
        required:true,
    },

    productImage:{
        type:String
    },

    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    
    owener :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamp:true})

export const Product = mongoose.models("Product", productSchema)