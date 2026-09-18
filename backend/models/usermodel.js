import mongoose from "mongoose";


const UserSehema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    confirmpassword: { type: String, require: true },
    dob: { type: String, default: 'None' },
    age: { type: Number, default: 0 },
    gender: { type: String, default: 'None' },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    date: {type: Date,default: Date.now()}
});
const usermodel = mongoose.model('user', UserSehema)
export default usermodel;