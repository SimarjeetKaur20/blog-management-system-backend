const Post = require("../models/Post");

/* CREATE POST (already OK) */
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const post = new Post({
      title,
      content,
      authorId: req.user.id
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Failed to create post" });
  }
};

/* GET USER POSTS (already OK) */
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({ authorId: req.user.id });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};

/* ✅ UPDATE POST (OWNER CHECK ADDED) */
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // 🔐 Authorization check
    if (post.authorId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Failed to update post" });
  }
};

/* ✅ DELETE POST (OWNER CHECK ADDED) */
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // 🔐 Authorization check
    if (post.authorId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete post" });
  }
};
