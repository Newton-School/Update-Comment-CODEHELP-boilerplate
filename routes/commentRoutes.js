const express = require("express");

const { createComment, getComment, deleteComment, updateComment } = require("../controllers/commentControllers");

const router = express.Router();

router.get("/:id", getComment);
router.post("/create", createComment);
router.post("/delete/:id", deleteComment);
router.post("/update/:id", updateComment);

module.exports = router;