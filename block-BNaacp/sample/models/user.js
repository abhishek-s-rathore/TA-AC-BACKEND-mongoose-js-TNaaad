const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, lowercase: true, match: /@/ },
    sports: [String],
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);

module.exports = User;
