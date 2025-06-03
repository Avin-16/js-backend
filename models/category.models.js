import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    }
},{timestapms:true})

export const Category =mongoose.model('Category', categorySchema)