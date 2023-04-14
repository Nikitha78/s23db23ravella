const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
manufacture: String,
model: String,
price: Number
})
module.exports = mongoose.model("car", 
carSchema)