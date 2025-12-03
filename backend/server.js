const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on port ${PORT}`);
});