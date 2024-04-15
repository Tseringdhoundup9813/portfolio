import userModel from "../models/user.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";



export const createConnection=async(req,res,next)=>{
    const {email} = req.body;
    try{
        const create = await userModel.create(req.body);
        res.status(201).json({
            status:true,
            message:'successfully send'
        })
    }catch(err){
        res.status(500).json({
            status:false,
            message:err.message
        })
    }
}
