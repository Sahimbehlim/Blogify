const express = require("express");
const {
  createPost,
  getAllPosts,
  getTopPosts,
  getSinglePost,
  getPostsByTag,
  updatePost,
  deletePost,
  searchPosts,
  likePost,
} = require("../controllers/blogPostController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

// BlogPost routes
router.get("/search", searchPosts);
router.get("/trending", getTopPosts);
router.get("/tag/:tag", getPostsByTag);
router.put("/:id/like", likePost);
router
  .route("/")
  .get(getAllPosts)
  .post(protect, upload.single("coverImage"), createPost);
router
  .route("/:id")
  .get(getSinglePost)
  .put(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;
