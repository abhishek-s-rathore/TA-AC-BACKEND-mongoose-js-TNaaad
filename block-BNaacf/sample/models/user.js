let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, match: /@/ },
    age: { type: Number, min: 18, max: 60 },
    password: { type: String, minlength: 5, maxlength: 15 },
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);
