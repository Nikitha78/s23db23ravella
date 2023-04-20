const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
car_name: String,
car_model: String,
car_price: Number
})
module.exports = mongoose.model("car", 
carSchema)