const express = require("express");
const router = express.Router();
//const Movie = require("../Models/Movie");
const { addToWishlist } = require("../Controllers/WishListController");
const {fetchwishlist} = require("../Controllers/FetchWishList")
router.post("/add", addToWishlist);
router.get("/:userId",fetchwishlist);
module.exports = router;