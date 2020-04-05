const Post = require("../models/Post");

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


    newData.save()
        .then(result => {
            res.status(201).json({
                msg: "Success on creating a post",
                data: result
            });
        })
        .catch(err => {
            console.log()
            return res.status(500).json({error: err});
        });
};