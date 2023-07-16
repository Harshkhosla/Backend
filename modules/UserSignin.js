// UserSignin.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserDetailsSchema = new Schema({
  PhoneNo: Number,
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  postalCode: Number,
});

const ProductDetailsSchema = new Schema({
  value: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const UserSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ProductId: String,
  No_Of_chargers: Number,
  Live_chargers: String,
  Project: String,
  Activity_status: String,
  Notifications: String,
  Time: String,
  BoughtStatus: String,
  TotalTime: String,
  Charging_mode: String,
  Status: String,
  Input_current: Number,
  Input_voltage: Number,
  Output_current: Number,
  Output_voltage: Number,
  userDetails: [UserDetailsSchema],
  productDetails: {
    type: [ProductDetailsSchema],
    default: [],
  },
});

module.exports = mongoose.model('UserSignin', UserSchema);
