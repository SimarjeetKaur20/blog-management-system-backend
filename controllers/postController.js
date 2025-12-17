const Post = require("../models/post");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content, authorId: req.user.id });
  await post.save();
  res.json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find({ authorId: req.user.id });
  res.json(posts);
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const updated = await Post.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.send("Post deleted");
};
