var mongoose = require('mongoose');

var Scheema = mongoose.Schema;

var userScheema = new Scheema({
  name: String,
  age: Number,
  favorites: [String],
  marks: [Number],
  family: {
    father: String,
    mother: String,
  },
});
