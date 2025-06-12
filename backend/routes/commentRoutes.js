const express = require("express");
const {
  addComment,
  getCommentsByPost,
  deleteComment,
  getAllComments,
} = require("../controllers/commentController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/:postId").post(protect, addComment).get(getCommentsByPost);
router.get("/", getAllComments);
router.delete("/:commentId", protect, deleteComment);

module.exports = router;
