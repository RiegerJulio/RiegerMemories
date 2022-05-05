const mongoose = require('mongoose');
const postServices = require('../services/postServices')
// const PostInfo = require('../models/PostInfo');

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await postServices.getAllPosts();
    res.status(200).json(allPosts);
  } catch (e) {
    res.status(404).json({ message: 'No posts found' });
  }
}

const createPost = async (req, res) => {
  const post = req.body;
  
  try {
    const newPost = await postServices.createPost(post);
    res.status(201).json(newPost);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { name, title, message, location, file }= req.body;
  const postParams = { name, title, message, location, file, _id: id }

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: 'Post not found' });
    }
    const updatedPost = await postServices.updatePost(id, postParams);
    res.status(200).json({ message: updatedPost });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: 'Post not found' });
    }
    const deletedPost = await postServices.deletePost(id)
    res.status(200).json({ message: deletedPost });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong'});
  }
}

    

module.exports = { getAllPosts, createPost, updatePost, deletePost };