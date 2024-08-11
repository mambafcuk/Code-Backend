import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { configDotenv } from "dotenv";



const connectDb =  async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected Successfully !! :: DB HOST : ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB Connection Error", error);
        process.exit(1)
        
    }
}


export default connectDb