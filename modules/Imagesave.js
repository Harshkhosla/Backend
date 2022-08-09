const mongoose = require('mongoose');
const { Schema }= mongoose
 
const ImageSchema =new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    schema:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type: String  
    },
    image:{
        //--------------------------------------------for binary data---------------------------------------------------------------------//
    //   data:Buffer,
    //   contentType:String


    //------------------------------------------------for string data----------------------------------------------------------------------//
    type: String,
    required:true
    }

})
module.exports=mongoose.model('image',ImageSchema)