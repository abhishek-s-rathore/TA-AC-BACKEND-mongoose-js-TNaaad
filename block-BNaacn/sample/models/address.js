const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let addressSchema = new Schema(
  {
    village: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: { type: Number },
    user: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
);

let Address = mongoose.model('Address', addressSchema);

module.exports = Address;
