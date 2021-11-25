const express=require('express');
const userRouter=require('./routes/user');
const classRouter=require('./routes/class');
const app=express();
app.use(express.json());
app.use("/api",userRouter);
app.use("/api",classRouter);
app.listen(2000,()=>{
    console.log("server running");
})