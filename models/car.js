const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
car_name:  {
    type: String,
    required:true
    
},
car_model:  {
    type: String,
    required:true
},
car_price: {
    type:Number,
    required:true,
    min:1,
    max:100000
},
})
module.exports = mongoose.model("car", 
carSchema)