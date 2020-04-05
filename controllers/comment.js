const Post = require("../models/Post");
const Comment = require("../models/Comment");

// POST /comment/:postId
exports.addComment = async(req, res, next) => {
    try{
        const postId = req.params.postId;
        const comment = await Comment.create(req.body);
        const post = await Post.findById(postId)

        post.comments.unshift(comment);
        await post.save();
 
        return res.status(200).json({
            msg: "Comment is added",
            data: comment,
            post: post
        });
    }catch(err){
         console.log("error in POST /comment/:postId" + err);
         res.status(500).json({ error: "Something went wrong in the server"});
    }
};