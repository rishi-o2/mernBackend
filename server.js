// server.js
const express = require("express");
const connectDB = require("./Config/db");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/authRoutes");
const WishlistRoutes = require("./Routes/WishlistaddRoute");

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/wishlist",WishlistRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
