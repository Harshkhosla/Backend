const mongoose = require('mongoose');
const { Schema }= mongoose


const Informtaion =new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
   name:String,
   email:{
    type: String,
    required:true,
    unique:true
},
Adress: [{ addressLine1: String, addressLine2: String ,city:String,state:String ,postalCode:Number}],
adharNo:Number,
PhoneNo:Number,
BloodGroup:String

})
module.exports= mongoose.model('information',Informtaion)