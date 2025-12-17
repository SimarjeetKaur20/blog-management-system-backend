const express = require("express");
const { createPost, getPosts, updatePost, deletePost } = require("../controllers/postController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", auth, createPost);
router.get("/", auth, getPosts);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

module.exports = router;
