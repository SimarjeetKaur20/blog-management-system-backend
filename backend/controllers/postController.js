
/* CREATE POST (already OK) */
const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content required" });
    }

    const post = new Post({
      title,
      content,
      authorId: req.user.id // 🔥 THIS IS THE FIX
    });

    await post.save();

    res.status(201).json(post);
  } catch (error) {
    console.error("CREATE POST ERROR 👉", error);
    res.status(500).json({ message: "Failed to create post" });
  }
};


/* GET USER POSTS (already OK) */
exports.getPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    const skip = (page - 1) * limit;

    // search in title or content
    const query = {
      authorId: req.user.id,
      $or: [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } }
      ]
    };

    const totalPosts = await Post.countDocuments(query);

    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      posts,
      currentPage: page,
      totalPages: Math.ceil(totalPosts / limit)
    });
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
