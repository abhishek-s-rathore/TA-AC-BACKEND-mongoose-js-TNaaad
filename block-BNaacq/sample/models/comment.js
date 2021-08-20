const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      maxlength: 1000,
    },
    likes: { type: Number, default: 0 },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    article: { type: Schema.Types.ObjectId, ref: 'Article' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
