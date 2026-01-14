const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('RISE Lab Backend Server Running');
});

// Placeholder for Join Lab email
app.post('/api/join', (req, res) => {
  // Implementation later
  res.json({ message: 'Join request received' });
});

// Placeholder for Equipment Request email
app.post('/api/equipment', (req, res) => {
  // Implementation later
  res.json({ message: 'Equipment request received' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
