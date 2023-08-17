const mongoose = require('mongoose');

const UnSendSchema = new mongoose.Schema({
    email:{type:String},
    date:{type:Date}
},{timestamps:true})

const UnSendModel = mongoose.model('unsend',UnSendSchema)

module.exports = UnSendModel