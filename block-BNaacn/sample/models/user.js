const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String, maxlength: 100 },
    email: { type: String, match: /@/, lowercase: true },
    age: { type: Number, default: 0 },
    password: { type: String, minlength: 5, maxlength: 20 },
    // createdAt: { type: Date, default: new Date() },
    favorites: [String]
  },
  { timestamps: true }
);


let User = mongoose.model('User', userSchema);

module.exports = User;