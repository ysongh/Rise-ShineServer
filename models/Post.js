const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    video_id: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema); 