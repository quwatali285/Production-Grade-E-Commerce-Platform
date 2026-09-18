import mongoose from "mongoose";
import ordermodel from "../models/ordermodel.js";


export const allorders=async (req,res) => {
    const orders=await ordermodel.find()
    res.json({
        orders:orders
    })
}
export const createorder=async (req,res) => {
    const {username,userid,city,address,image,productname,productid,price,qty,bill}=req.body;
    const order=await ordermodel.create({
            username,userid,city,address,image,productname,productid,price,qty,bill        
    })
    res.json({
        order:order
    })
}
