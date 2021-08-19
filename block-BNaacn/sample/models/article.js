const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: { type: String, maxlength: 100 },
  description: { type: String },
  tags: [String],
  createdAt: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;
