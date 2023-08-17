const mongoose = require('mongoose');

const validSchema = new mongoose.Schema({
    email:{type:String}
},{timestamps:true})

const validModel = mongoose.model('valid',validSchema)

module.exports = validModel