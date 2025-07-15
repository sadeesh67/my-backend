// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');

const app = express();

// ✅ Middleware
app.use(cors({
  origin: 'https://silver-taffy-f55f7e.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json()); // ✅ Add this to parse JSON bodies

// ✅ MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Test route
app.get("/api/test", (req, res) => {
  res.send("✅ Backend is working!");
});

// ✅ Signup route
app.post("/api/auth/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    console.log("✅ User saved:", user);
    res.status(201).send({ msg: "User registered" });
  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

// ✅ Default route
app.get('/', (req, res) => {
  res.send('API is working');
});

// ✅ Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});


