const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author:{
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

module.exports = mongoose.model('Comment', CommentSchema); 