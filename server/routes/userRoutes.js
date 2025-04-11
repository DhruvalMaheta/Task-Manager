const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { deleteUser, getUserById, getUser } = require("../controllers/userController");
const router = express.Router();


// User Managemnet Routes
router.get("/",protect, adminOnly, getUser); // get all users (admin only)
router.get("/:id", protect, getUserById); // get a specific user 
// router.delete("/:id", protect, adminOnly, deleteUser);



module.exports = router;