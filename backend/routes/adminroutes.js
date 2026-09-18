import mongoose from "mongoose";
import express from 'express';
import { Allusers, Deleteuser, Edituser } from "../controllers/admincontroller.js";
import { Allproducts, Createproduct, Deleteproduct, Editproduct,Getproduct} from "../controllers/productcontroller.js";
import { upload } from "../middleware/upload.js";

const adminroutes=express.Router();
adminroutes.get('/',Allusers)
adminroutes.post('/delete',Deleteuser)
adminroutes.post('/edit',Edituser)
adminroutes.post('/get',Getproduct)
adminroutes.get('/product',Allproducts)
adminroutes.post('/deleteproduct',Deleteproduct)
adminroutes.post('/Editproduct',upload.single('image'),Editproduct);

adminroutes.post('/createproduct',upload.single('image'),Createproduct)


export default adminroutes;