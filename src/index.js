// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";


dotenv.config({path: './env'})


connectDB()





// const app=express()
// ( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Errror",error);
//             throw error
//         });
//         app.listen(process.env.PORT,()=>{
//             console.log("Server running")
//         })
//     }catch(err){
//         throw err
//     }
// })