require("dotenv").config(); // ✅ MUST be FIRST

const express = require("express");
const cors = require("cors"); // ✅ ADD THIS
const app = express();

require("./config/db_mongo");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

// ✅ ENABLE CORS (THIS FIXES YOUR ISSUE)
app.use(cors());

// ✅ Parse JSON
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Blog Management System API is running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
