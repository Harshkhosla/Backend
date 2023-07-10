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
    ProductId:String,
    No_Of_chargers:Number,
    PhoneNo:Number,
    Live_chargers:String,
    addressLine1: String, 
    addressLine2: String ,
    city:String,
    state:String ,
    postalCode:Number,
    Project:String,
    Activity_status:String,
    Remarks_Of_Activity:String,
    Time: String, 
    TotalTime: String ,
    Status:{
        type: String,
    }, 

})
module.exports = mongoose.model('user',UserSchema)