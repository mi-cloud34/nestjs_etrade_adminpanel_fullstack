import mongoose, { models,model, Schema, SchemaTypes } from "mongoose";
import Category from "./Category";

const productSchema=new Schema({
    name:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:String,require:true},
    imgSrc:[{type:String,require:true}],
    brand:{type:String,require:true},
    inStock:{type:Boolean,require:true},
    categoryId: {required: true, type:mongoose.Types.ObjectId,ref:"Category" },
    reviews:[{required: false, type:mongoose.Types.ObjectId,ref:"Reviews"}]
});
const Product=models.Product||model("Product",productSchema);
export default Product;