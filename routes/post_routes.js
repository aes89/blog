const router = require("express").Router();
const { 
  addNewPost,
  getAllPosts } = require ("../controllers/post_controller.js");
const { updatePost } = require("../utilities/post_utilities.js");

router.post("/", addNewPost);
router.get("/", getAllPosts);
router.put("/:id", updateOnePost);
router.delete("/:id")


module.exports = router;