import { getAllPosts, createPost } from '../services/postServices';

const getAllposts = async (req, res) => {
  try {
    const allPosts = await getAllPosts();
    res.status(200).json({ allPosts });
  } catch (e) {
    res.status(404).json({ message: 'No posts found' });
  }
}

const createNewPost = async (req, res) => {
  const post = req.body;
  
  try {
    const newPost = await createPost(post);
    res.status(201).json(newPost);
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default { getAllposts, createNewPost };