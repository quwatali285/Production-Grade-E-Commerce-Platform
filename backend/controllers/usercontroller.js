import mongoose from "mongoose";
import usermodel from "../models/usermodel.js"
import cookieparser from "cookie-parser";
import bcrypt from 'bcrypt';
import JWT from "jsonwebtoken";

export const Allusers= async (req,res) => {
    const users = await usermodel.find({});
    res.json({
        users:users
    })
}

export const register = async (req, res) => {
    let { name, email, password, confirmpassword,dob,age,gender } = req.body;
    try {
        const existinguser = await usermodel.findOne({ email });
        if (existinguser) return res.send('you have already an account please login')
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);
        const adminemail='Quwatali900@gmail.com'
        if (password == confirmpassword) {
           const setrole = email === adminemail?'admin':'user'
            const user = await usermodel.create({
                name,
                email,
                password: hashpassword,
                role:setrole,
                dob,
                age,
                gender
            })
            const token = JWT.sign({ id: user._id }, process.env.TOKEN)
            res.cookie('token',token)
            console.log('Token is ', token);
            await res.json({
                success: true,
                token: token,
                role: user.role,
                email: user.email,
                id:user._id,
                message: "user register success"
            });
        } else {
            res.json('pasword and confirm password are not same please reenter your password')
        }
    } catch (error) {
        res.json(error.message)
    }
}

export const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        const user = await usermodel.findOne({ email });
        if (!user) return await res.json({ message: 'email or Passwprd is incorrect' })
        const passwor = await bcrypt.compare(password, user.password)
        console.log(passwor);
        if (passwor) {
            const token = JWT.sign({ id: user._id }, process.env.TOKEN)
            res.json({
                success: true,
                token: token,
                id:user._id,
                role: user.role,
                message: "Login Successfull",
                user: user
            });
        } else {
            res.json({ message: 'email or Passwprd is incorrect' })
        }
    } catch (error) {
        res.json(error.message)
    }
}
export const forgotpassword = async (req, res) => {
    let { email } = req.body;
    try {
        const user = await usermodel.findOne({ email });
        if (!user) return await res.json({
            message: 'Email is incorrect',
            success: false
        })
        else return res.json({
            message: 'Email is correct',
            success: true,
            user: user

        })

    } catch (error) {
        res.json(error.message)
    }
}

export const resetpassword = async (req, res) => {
    const { email, newpassword } = req.body;
    try {
        const user = await usermodel.findOne({ email })
        if (user) {
            const password = await bcrypt.compare(newpassword, user.password)
            if (password) return await res.json({
                success: false,
                message: 'Password Updated unsucessfull'
            })
            const hashpassword = await bcrypt.hash(newpassword, 10);
            const resetpassword = await usermodel.findOneAndUpdate(
                { email },                     // find user
                { password: hashpassword }     // update password
            );
            res.json({
                success: false,
                message: 'Password Updated sucessfull'
            })
        } else {
            res.json({
                success: false,
                message: 'Password Updated unsucessfull'
            })
        }
    } catch (error) {
        console.log(error.message);

    }
}

export const Getuser = async (req, res) => {
    const { id } = req.body;
    try {
        const user = await usermodel.findById(id);
        res.json({
            user
        }
        )
    } catch (error) {
        res.json(error.message)
    }
}

export const fixUserDates = async (req, res) => {
  try {
    const users = await usermodel.find({ date: { $exists: false } });

    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const today = new Date();

    const updatedUsers = [];

    for (let user of users) {
      user.date = new Date(
        startOfMonth.getTime() +
        Math.random() * (today.getTime() - startOfMonth.getTime())
      );

      await user.save();
      updatedUsers.push(user._id);
    }

    res.json({
      success: true,
      message: "Users updated successfully",
      count: updatedUsers.length
    });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};