const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    video_id: {
        type: String,
        require: true
    },
    image_url:{
        type: String
    },
    resource_url:{
        type: String
    },
    text:{
        type: String,
        require: true
    },
    category:{
        type: String
    },
    type:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    },
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

module.exports = mongoose.model('Post', PostSchema); 