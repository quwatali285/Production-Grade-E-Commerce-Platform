import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: { type: String },
    price: { type: String },
    image: { type: String },
    maincatagory: { type: String },
    subcatagory: { type: String },
    childcatagory: { type: String },
    date: { 
        type: Date,
        default:Date.now() 
    }
})

const productmodel=mongoose.model('product',productSchema)
export default productmodel;