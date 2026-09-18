import express from "express";
import { forgotpassword, Getuser, login, register, resetpassword } from "../controllers/usercontroller.js";
import { Allusers} from "../controllers/admincontroller.js";
import { Allproducts } from "../controllers/productcontroller.js";

// fix dates
// import { fixUserDates } from "../controllers/usercontroller.js";
// import { fixproductDates  } from "../controllers/productcontroller.js";

const userrouter=express.Router();
userrouter.post('/Allusers',Allusers);
userrouter.post('/getuser',Getuser);
userrouter.post('/register',register);
userrouter.post('/login',login);
// userrouter.get("/fix", fixUserDates);
// userrouter.get("/productfix", fixproductDates);
userrouter.post('/forgotpassword',forgotpassword);
userrouter.post('/resetpassword',resetpassword);
userrouter.get('/product',Allproducts)
export default userrouter;