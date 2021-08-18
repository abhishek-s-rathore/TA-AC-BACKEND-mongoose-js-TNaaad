const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userScheema = new Scheema({
  name: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  email: { type: String, lowercase: true },
});
