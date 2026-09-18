import mongoose from "mongoose";
import usermodel from "../models/usermodel.js"

export const Allusers = async (req, res) => {
    try {
        const existinguser = await usermodel.find({ role: { $eq: 'user' } });
        res.json(
            existinguser)
    } catch (error) {
        res.json(error.message)
    }
}
export const Edituser = async (req, res) => {
    const { id, dob, age, gender } = req.body;
    const edituser = await usermodel.findOneAndUpdate(
        { _id: id },
        {
            dob: dob,
            age: age,
            gender: gender
        }
    )
    console.log(age);
    res.json({
        edituser
    })
}
export const Deleteuser = async (req, res) => {
    const { id } = req.body;
    try {
        const existinguser = await usermodel.findByIdAndDelete(id);
        res.json(
            existinguser)
    } catch (error) {
        res.json(error.message)
    }
}



