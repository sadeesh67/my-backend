// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');


const app = express();

// Middleware
const cors = require('cors');

// Allow your Netlify domain
app.use(cors({
  origin: 'https://silver-taffy-f55f7e.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.post("/api/auth/register", async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  console.log("✅ User saved:", user); // <-- Add this
  res.status(201).send({ msg: "User registered" });
});







// ✅ Get MongoDB URI from environment variable
const mongoURI = process.env.MONGO_URI;


// ✅ TEST ROUTE (for step 3)
app.get("/api/test", (req, res) => {
  res.send("✅ Backend is working!");
});

// ✅ Connect to MongoDB using mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Sample route
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
app.post('/api/auth/register', async (req, res) => {
  // registration logic here
});

