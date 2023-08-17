const mongoose = require('mongoose');
 require('dotenv').config()

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err.message);
})