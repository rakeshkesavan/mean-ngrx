const express = require("express");
const router = express.Router();
const PostController = require("../controller/posts.controller");

router.get("", PostController.getPosts).post("", PostController.createPosts);

module.exports = router;
