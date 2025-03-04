const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("🟢 MongoDB Connected...");
  } catch (err) {
    console.error("🔴 MongoDB Connection Failed:", err);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectDB;
