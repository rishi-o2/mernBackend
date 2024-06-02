const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  releaseDate: { type: Date },
  genre: { type: String },
  posterUrl: { type: String },
  // Other movie-related fields...
});

module.exports = mongoose.model("Movie", movieSchema);
