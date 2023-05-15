const mongoose = require('mongoose');
const { Schema }= mongoose
 
const Taskep =new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },    
    schema:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }, 
    Project:{
        type: String,
        required:true
    },
    Task:{
        type: String,
        required:true,
    },
    TaskDescription:{
        type: String,
    },
    Date:{
        type:Date,
        default: Date.now
    },
    TotalTime:{
        type: String,
    },
    Status:{
        type: String,
    }

})
module.exports=mongoose.model('Taskep',Taskep)