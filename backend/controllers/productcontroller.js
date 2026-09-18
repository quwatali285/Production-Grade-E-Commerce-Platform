import mongoose from "mongoose";
import productmodel from "../models/productmodel.js";

export const Createproduct = async (req, res) => {
    try {
        const product = await productmodel.create({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename,
            maincatagory: req.body.maincatagory,
            subcatagory: req.body.subcatagory,
            childcatagory:req.body.childcatagory 
        })
        res.json(
            {
                message: true,
                product: product
            }
        )
    } catch (error) {
        console.log(error.message);

    }
}

export const Allproducts = async (req, res) => {
    try {
        const existingproduct = await productmodel.find();
        res.json(
            existingproduct)
    } catch (error) {
        res.json(error.message)
    }
}
export const Editproduct = async (req, res) => {
    const { id, name, price,maincatagory,subcatagory,childcatagory} = req.body;

    const updateData = {};
    if (name !==undefined && name!=="") updateData.name=name; 
    if (price !==undefined && price!=="") updateData.price=price; 
    if (maincatagory !==undefined && maincatagory!=="") updateData.maincatagory=maincatagory; 
    if (subcatagory !==undefined && subcatagory!=="") updateData.subcatagory=subcatagory; 
    if (childcatagory !==undefined && childcatagory!=="") updateData.childcatagory=childcatagory; 
    if (req.file) {updateData.image = req.file.filename;}

    const editproduct = await productmodel.findOneAndUpdate(
        { _id: id },
        { $set: updateData },   // 🔥 important
        { new: true }
    );

    res.json({ editproduct });
};

export const Getproduct = async (req, res) => {
    const { id } = req.body;
    try {
        const existingproduct = await productmodel.findById(id);
        res.json(
            existingproduct)
    } catch (error) {
        res.json(error.message)
    }
}
export const Deleteproduct = async (req, res) => {
    const { id } = req.body;
    try {
        const existingproduct = await productmodel.findByIdAndDelete(id);
        res.json(
            existingproduct)
    } catch (error) {
        res.json(error.message)
    }
}

// export const fixproductDates = async (req, res) => {
//   try {
//     const products = await productmodel.find({});

//     const today = new Date();

//     // 🔥 FIX: only current year Jan → May
//     const startDate = new Date(today.getFullYear(), 0, 1);

//     const updatedproducts = [];

//     for (let product of products) {

//       const randomTime =
//         startDate.getTime() +
//         Math.random() * (today.getTime() - startDate.getTime());

//       product.date = new Date(randomTime);

//       await product.save();
//       updatedproducts.push(product._id);
//     }

//     res.json({
//       success: true,
//       message: "dates distributed Jan → current month only",
//       count: updatedproducts.length
//     });

//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };
// export const fixproductDates = async (req, res) => {
//   try {
//     const products = await productmodel.find({ date: { $exists: false } });

//     const startOfMonth = new Date();
//     startOfMonth.setDate(1);
//     startOfMonth.setHours(0, 0, 0, 0);

//     const today = new Date();

//     const updatedproducts = [];

//     for (let product of products) {
//       product.date = new Date(
//         startOfMonth.getTime() +
//         Math.random() * (today.getTime() - startOfMonth.getTime())
//       );

//       await product.save();
//       updatedproducts.push(product._id);
//     }

//     res.json({
//       success: true,
//       message: "products updated successfully",
//       count: updatedproducts.length
//     });

//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };