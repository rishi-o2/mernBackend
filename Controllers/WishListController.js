const User = require("../Models/User");
exports.addToWishlist = async (req, res) => {
  console.log("I am being called");
  const { userId, movieId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.wishlist.includes(movieId)) {
      return res.status(400).json({ message: "Movie already in wishlist" });
    }

    user.wishlist.push(movieId);
    
     // Push the movieId (IMDb ID) to the wishlist
    await user.save();

    res.status(200).json({ message: "Movie added to wishlist" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
