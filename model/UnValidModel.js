const mongoose = require('mongoose');

const unvalidSchema = new mongoose.Schema({
    email:{type:String},
    date:{type:Date}
},{timestamps:true})

const UnValidModel = mongoose.model('unvalid',unvalidSchema)

module.exports = UnValidModel