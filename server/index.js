


import dotenv from "dotenv"
dotenv.config();
import express from "express"
import cors from "cors"
import db from "./utils/db.js"

import GlobalErrorHander from "./utils/GlobalErrorHandler.js"
import ErrorHandler from "./utils/ErrorHandler.js"
// router
import userRouter from "./routes/user.route.js"




const app = express();


// UNCAUGHT EXCEPTION 
// process.on('uncaughtException',(err)=>{
//     console.log(err.name,err.message);
//     console.log('unCaughtException has occured! Shutting down....')
//     process.exit(1);
// })
// -----------------------------
// CORS
app.use(cors())

// 
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// -----------------------------------------------------------

app.get("/api/home",(req,res)=>{
    res.send('hello world');
})

// router
app.use('/api',userRouter);
// /---------------------



// --------------------------------------------------------------
const PORT = process.env.PORT || 8000
// connect to database
db();
// 
const server = app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

// CATCH NOT DEFINED ROUTE
app.all('*',(req,res,next)=>{
    const msg = `Can't find  ${req.originalUrl} on the server! `
    const error = new ErrorHandler(msg,404);
    next(error);
})

// GLOBAL ERROR HANDLER
app.use(GlobalErrorHander)


// REJECTED PROMISES

process.on('unhandledRejection',(err)=>{
    console.log(err.name,err.message);
    console.log('unhandled rejection occured! Shutting down....')
    server.close();
    process.exit(1)
})


