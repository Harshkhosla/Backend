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
    Notifications :String,
    Time: String, 
    BoughtStatus:String,
    TotalTime: String ,
    Charging_mode:String,
    Status:{
        type: String,
    }, 
    Input_current:Number,
    Input_voltage:Number,
    
    Output_current:Number,
    Output_voltage:Number,

})
module.exports = mongoose.model('user',UserSchema)