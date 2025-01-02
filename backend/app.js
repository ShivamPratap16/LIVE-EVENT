const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Example route for handling event data
app.post('/events', (req, res) => {
  const eventData = req.body;
  console.log('Event Data:', eventData);
  res.status(201).send('Event data received');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});