const mongoose = require("mongoose");

const SendSms = new mongoose.Schema({
    number: {type: Number, required: true},
    content: {type: String, required: true},
    date: {type: String}
})

module.exports = mongoose.model('Messages', SendSms)