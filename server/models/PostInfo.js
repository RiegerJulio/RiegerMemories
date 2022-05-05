const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  name: String,
  title: String,
  location: String,
  message: String,
  file: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const PostInfo = mongoose.model('PostInfo', postSchema);

module.exports = PostInfo;