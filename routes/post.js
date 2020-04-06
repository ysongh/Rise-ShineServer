const express = require("express");
const postController = require("../controllers/post");
const router = express.Router();

router.get('/', postController.findAllPost);
router.post('/', postController.createPost);
router.get('/:postId', postController.findPostById);
router.delete('/:postId', postController.deletePost);

module.exports = router;