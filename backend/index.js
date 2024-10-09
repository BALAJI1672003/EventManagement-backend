const express=require('express');
const dotenv=require('dotenv');
const db=require('./DB/db');
const cors=require('cors');
const authRoutes=require('./Routes/Auth');
const EventRoutes=require('./Routes/Event');
dotenv.config();
const app=express();
app.use(express.json());
app.use('/uploads/images',express.static('uploads/images'));
app.use(cors());
app.use('/api/auth',authRoutes);
app.use('/api/event',EventRoutes);
app.listen(process.env.PORT||5000,()=>{
    console.log(`server is listening on port ${process.env.PORT}`)
})
db();
