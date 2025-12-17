require("dotenv").config(); // ✅ MUST be FIRST

const express = require("express");
const app = express();

require("./config/db_mongo");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Blog Management System API is running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
