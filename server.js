const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// ✅ Static files (public folder) – sab se pehle
app.use(express.static('public'));

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));

// ❌ Root route (app.get('/')) ko hata diya gaya hai

// 404 handler (last mein rakhein)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});