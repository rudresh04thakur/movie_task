var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  year: {
    type: Number,
    default: 1970,
    validate(value) {
      if (value < 0) throw new Error("Negative number aren't real.");
    }
  },
  director: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
});

var Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;