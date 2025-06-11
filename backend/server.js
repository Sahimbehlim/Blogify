require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const aiRoutes = require("./routes/aiRoutes");
const authRoutes = require("./routes/authRoutes");
const blogPostRoutes = require("./routes/blogPostRoutes");
const commentRoutes = require("./routes/commentRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// Middleware to handle cors
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Connect database
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", blogPostRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/dashboard-summary", dashboardRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
