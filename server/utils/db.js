import mongoose from "mongoose";
export default async function connectToDatabase(){
    

       await mongoose.connect(process.env.MONGO_URI).then((conn)=>{
           console.log('successfully connected to database');
       });

    
}