const express = require("express");
const {
  generateBlogPost,
  generateBlogPostIdeas,
  generateCommentReply,
  generatePostSummary,
} = require("../controllers/aiController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/generate", protect, generateBlogPost);
router.post("/generate-ideas", protect, generateBlogPostIdeas);
router.post("/generate-reply", protect, generateCommentReply);
router.post("/generate-summary", generatePostSummary);

module.exports = router;
