const mongoose = require('mongoose');
const { Schema }= mongoose

const PdfSchema =new Schema({
    schema:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type: String  
    },
    pdf:{
        //--------------------------------------------for binary data---------------------------------------------------------------------//
    //   data:Buffer,
    //   contentType:String


    //------------------------------------------------for string data----------------------------------------------------------------------//
    type: String,
    required:true
    }

})
module.exports=mongoose.model('Pdf',PdfSchema)