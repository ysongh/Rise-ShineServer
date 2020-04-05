const express = require("express");
const commentController = require("../controllers/comment");
const router = express.Router();

router.post('/:postId', commentController.addComment);

module.exports = router;