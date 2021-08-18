var mongoose = require('mongoose');

var Scheema = mongoose.Schema;

var userScheema = new Scheema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: mongoose.Schema.Types.ObjectId,
});
