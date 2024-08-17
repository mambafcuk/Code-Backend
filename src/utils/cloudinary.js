import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';  //fs stands file system helps us to read, write & other operations\
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
})


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
})


const uploadOnCloudinary = async (localFilePath)=>{
    try {
     if(!localFilePath) return null
     //upload file on cloudinary
     const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto"
     })   
     //file has been uploaded successfully !
     console.log('File is uploaded successfully on cloudinary', response.url);
     return response
     
    } catch (error) {
        fs.unlink(localFilePath) //remove the locally saved temp file
        console.log("Failed to upload on the cloudinary");
        return null;
        
    }
}


export {uploadOnCloudinary}
