const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  postId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
}, {
  timestamps: true,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
