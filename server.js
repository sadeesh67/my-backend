// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: ["https://your-netlify-site.netlify.app"],
  credentials: true
}));
app.use(express.json());





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

