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

const updatePost = async (id, post) => {
  const updatedPost = await PostInfo.findByIdAndUpdate(id, post, { new: true });
  return updatedPost;
}

const deletePost = async (id) => {
  const deletedPost = await PostInfo.findByIdAndRemove(id);
  return deletedPost;
}

module.exports = { getAllPosts, createPost, updatePost, deletePost };