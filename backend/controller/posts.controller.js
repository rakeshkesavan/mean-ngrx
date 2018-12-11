const PostModel = require("../models/post.model");

exports.getPosts = async (req, res, next) => {
  try {
    console.log("req");
    const posts = await PostModel.find({});
    res.send(posts);
    next();
  } catch (err) {
    console.log(err);
    return next();
  }
};

exports.createPosts = async (req, res, next) => {
  try {
    const post = new PostModel({
      title: req.body.title,
      content: req.body.content
    });
    const posts = await post.save();
    res.send(posts);
    next();
  } catch (err) {
    console.log(err);
    return next();
  }
};
