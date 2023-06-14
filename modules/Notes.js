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
        // required:true
    },
    discription:{
        type: String,
        // required:true,
    },
    name:{
        type: String,
    },
    contactNo:{
        type: String,
    },
    place:{
        type: String,
    },
    setectDate:{
        type: String,
    },selectHour:{
        type: String,
    },
    tag:{
        type: String,
    },
    Date:{
        type:Date,
        default: Date.now
    },
    email:{
        type: String,
    },
    date:{
        type: String,
    },
    hour:{
        type: String,
    },
    numberofpeople:{
        type: String,
    }

})
module.exports=mongoose.model('notes',NotesSchema)