import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    username:{type:String},
    userid:{type:String},
    city:{type:String},
    address:{type:String},
    image:{type:String},
    productname:{type:String},
    productid:{type:String},
    price:{type:Number},
    qty:{type:Number},
    bill:{type:Number},
    status: {
   type: String,
   default: 'pending'
},

Date: {
   type: String,
   default: () => new Date().toISOString().split("T")[0]
}
})

const ordermodel=mongoose.model('order',orderSchema);
export default ordermodel
