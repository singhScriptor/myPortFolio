const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const path = require('path');
app.use(express.static(path.join(__dirname)));

// Route to handle contact form submissions
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  const entry = `Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}\n`;

  // Save to contacts.txt
  fs.appendFileSync('contacts.txt', entry);

  res.json({ status: 'success', message: 'Saved to contacts.txt' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});