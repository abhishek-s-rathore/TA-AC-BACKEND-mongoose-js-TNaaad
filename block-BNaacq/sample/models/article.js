const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: { type: String, requied: true },
    description: {
      type: String,
      required: true,
      minlength: 100,
      maxlength: 10000,
    },
    tags: [String],
    likes: { type: Number, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Article', articleSchema);
