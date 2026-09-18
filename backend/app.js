// importing Files
import express from 'express';
import dotenv from 'dotenv';
import dbconnection from './utils/db.js';
import userrouter from './routes/userroutes.js';
import adminroutes from './routes/adminroutes.js';
import bodyParser from "express";
import cookieParser from 'cookie-parser';
import cors from "cors";
import path from "path";
import orderrouter from './routes/orderroutes.js';

// Calling the port
dotenv.config();
const PORT=process.env.PORT

const app=express()

// Database Connection
dbconnection()

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/images", express.static("public/images"));
app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use('/user',userrouter);
app.use('/admin',adminroutes);
app.use('/order',orderrouter);

app.get('/',(req,res) => {
  res.send('Hello from express')   
})
// Port Listening
app.listen(PORT)


