import express from "express";
import { allorders, createorder } from "../controllers/ordercontroller.js";

const orderrouter=express.Router();
orderrouter.get('/allorders',allorders);
orderrouter.post('/create',createorder);

export default orderrouter;