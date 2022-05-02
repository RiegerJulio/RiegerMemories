const { PostInfo } = require('../models/PostInfo');

const getAllPosts = async () => {
  const allPosts = await PostInfo.find();
  return allPosts;
}

const createPost = async (post) => {
  const newPost = new PostInfo(post);
  const result = await newPost.save();
  return result;
}

module.exports = { getAllPosts, createPost };