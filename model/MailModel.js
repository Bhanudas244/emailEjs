const mongoose = require('mongoose');


const sendMailSchema = new mongoose.Schema({
    email:{type:String},
    date:{type:Date}
},{timestamps:true})


const sendMailModel = mongoose.model('send',sendMailSchema) 

module.exports = sendMailModel;