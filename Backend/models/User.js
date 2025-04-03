const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"], trim: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },
    country: { type: String },
    city: { type: String },
    languages: [String],
    profileImage: { type: String },
    role: { type: String, enum: ["student", "admin"], default: "student" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
