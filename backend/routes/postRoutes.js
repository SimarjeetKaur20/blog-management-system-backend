const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

// 🔐 PROTECTED ROUTES
router.post("/", authMiddleware, postController.createPost);
router.get("/", authMiddleware, postController.getPosts);
router.put("/:id", authMiddleware, postController.updatePost);
router.delete("/:id", authMiddleware, postController.deletePost);

module.exports = router;
