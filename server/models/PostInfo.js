const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  location: String,
  file: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const PostInfo = mongoose.model('PostInfo', postSchema);

export default PostInfo;