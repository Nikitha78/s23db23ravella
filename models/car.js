const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
manufacturer: String,
model: String,
price: Number
})
module.exports = mongoose.model("car", 
carSchema)