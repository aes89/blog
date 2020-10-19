const Post = require('../models/post_model');

// create
const newPost = function (req) {
    let date = Date.now();
    return new Post(req.body);
}

//read
const allPosts = function (req) {
    return Post.find();
};

// update
const updatePost = function(id) {
    return Post.findByIdAndUpdate(id);
  };

// delete
const deletePost = function (req) {
    return Post.findByIdRemove(id);
}
module.exports = {
    newPost,
    allPosts,
    updatePost,
    deletePost
}