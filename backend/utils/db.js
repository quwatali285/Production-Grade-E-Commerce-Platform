import mongoose from "mongoose";

const dbconnection = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('Database connected succefully');
    } catch (error) {
        console.log('Database Connection Error',error.message);   
    }
}

export default dbconnection;