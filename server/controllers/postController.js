const mongoose = require('mongoose');
const postServices = require('../services/postServices');

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await postServices.getAllPosts();
    res.status(200).json({ allPosts });
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
  const { id: _id } = req.params;
  const post = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ message: 'Post not found' });
    }
    const updatedPost = await postServices.updatePost(_id, post);
    res.status(200).json(updatedPost);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}


    

module.exports = { getAllPosts, createPost, updatePost };