const postRoutes = require('express').Router();
const postController = require('../controllers/postController');

postRoutes.get('/', postController.getAllPosts);
postRoutes.post('/', postController.createPost);
postRoutes.put('/:id', postController.updatePost);

module.exports = postRoutes;