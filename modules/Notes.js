const mongoose = require('mongoose');
const { Schema }= mongoose
 
const NotesSchema =new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },    
    schema:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }, 
    title:{
        type: String,
        required:true
    },
    discription:{
        type: String,
        required:true,
    },
    tag:{
        type: String,
    },
    Date:{
        type:Date,
        default: Date.now
    }

})
module.exports=mongoose.model('notes',NotesSchema)