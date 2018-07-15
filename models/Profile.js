const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  blood: {
    type: String,
    required: true
  },
  dateofbirth: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
