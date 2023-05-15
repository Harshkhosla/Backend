const mongoose = require('mongoose');
const { Schema }= mongoose
 
const UserSchema =new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }, 
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    }, 
    password:{
        type: String,
        required:true
    },
    adharNo:Number,
    PhoneNo:Number,
    BloodGroup:String,
    addressLine1: String, 
    addressLine2: String ,
    city:String,
    state:String ,
    postalCode:Number,
    Project:String,
    Task:String,
    TaskDescription:String,
    Time: String, 
    TotalTime: String ,
    Status:String,

})
module.exports = mongoose.model('user',UserSchema)