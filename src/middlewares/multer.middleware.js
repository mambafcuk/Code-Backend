import multer from "multer";


const storage = multer.diskStorage({
    destination: function(req, next, cb){
        cb(null, "./public/temp") //cb stands for call-back
    },
    filename: function(req, file, cb){
        
        cb(null, file.originalname)
    }
})


export const upload = multer({
    storage,
})