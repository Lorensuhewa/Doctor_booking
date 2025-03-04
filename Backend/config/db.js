const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
    try {
        const conn =  mongoose.connect(process.env.MONGO_URI, {
        });
        console.log(`🟢 MongoDB Connected successfully`);
    } catch (error) {
        console.error(`🔴 MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
