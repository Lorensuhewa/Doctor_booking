const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
