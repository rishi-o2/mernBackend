const User = require("../Models/User");

// GET user's wishlist
const fetchwishlist = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Retrieve movies in the user's wishlist
    console.log(user.wishlist);
    res.status(200).json(user.wishlist);
  } catch (error) {
    console.error("Error fetching wishlist movies:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { fetchwishlist };
