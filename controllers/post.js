const Post = require("../models/Post");

// GET /post
exports.findAllPost = async(req, res, next) => {
    try{
        const posts = await Post.find();

        return res.status(200).json({
            msg: "All posts found",
            data: posts,
            count: posts.length
        })
    }catch(err){
        console.log("error in GET /post" + err);
        res.status(500).json({ error: "Something went wrong in the server"});
    }
};

// POST /post
exports.createPost = async(req, res, next) => {
    try{
        const post = await Post.create(req.body);
 
        return res.status(200).json({
            msg: "Post is created",
            data: post
        })
     }catch(err){
         console.log("error in POST /post" + err);
         res.status(500).json({ error: "Something went wrong in the server"});
     }
};

// GET /post/:postId
exports.findPostById = async(req, res, next) => {
    try{
        const postId = req.params.postId;

        const post = await Post.findById(postId).populate("comments");

        return res.status(200).json({
            msg: "Post found",
            data: post,
        })
    }catch(err){
        console.log("error in GET /post/:postId" + err);
        res.status(500).json({ error: "Something went wrong in the server"});
    }
};