const express = require("express");
const mongoose = require("mongoose"); // Only once!
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
mongoose.connect(process.env.MONGO_URI)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("✅ Server running on http://localhost:5000")))
  .catch((err) => console.error("❌ MongoDB error:", err));

