import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB= async ()=>{
    try {
        const connectedInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Mongo db connected")
    } catch (error) {
        console.log("Mongodb error ",error)
        process.exit(1)
    }
}

export default connectDB