const mongoose = require('mongoose');

const db = async () => {
   const URL = 'mongodb+srv://paulsonmsc:1672003@cluster0.rdh3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

    try {
        await mongoose.connect(URL);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error: ", err.message); // log the error message
    }
};
module.exports=db;
