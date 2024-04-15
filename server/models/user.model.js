import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
    },
    message:{
        type:String,
        trim:true,
        required:true,
    }
})

const userModel = mongoose.model('user',userSchema)
export default userModel;