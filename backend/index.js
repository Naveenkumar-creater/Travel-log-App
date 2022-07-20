const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const pinRoute=require('./routes/pin');
const userRoute=require('./routes/user');
const app=express();

dotenv.config();

app.use(express.json());

mongoose.connect( process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connected data base")
})
.catch((err)=>
    console.log(err)
);

app.use("/api/pins",pinRoute);
app.use("/api/users",userRoute);


const port= process.env.PORT||8800;

app.listen(port,()=>console.log(`backend is created${port}`))