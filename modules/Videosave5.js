const mongoose = require('mongoose');
const { Schema }= mongoose

const videoSchema5 = new Schema({
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



module.exports=mongoose.model('video5',videoSchema5)