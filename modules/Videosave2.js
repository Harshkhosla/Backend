const mongoose = require('mongoose');
const { Schema }= mongoose

const videoSchema2 = new Schema({
  name: {
    type: String,
    // required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  schema: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  video: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});



module.exports=mongoose.model('video2',videoSchema2)