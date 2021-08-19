const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = mongoose.model('User', userSchema);

let userSchema = new Schema(
  {
    name: { type: String },
    age: { type: Number, min: 18, max: 60 },
    favorites: [String],
    marks: [Number],
    family: {
      father: String,
      mother: String,
    },
    passeord: { type: String, minlength: 8, maxlength: 20 },
  },
  { timestamps: true }
);

module.export = User;
