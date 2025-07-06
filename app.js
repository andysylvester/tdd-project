// app.js
const express = require('express');
const app = express();

// A simple route for testing
app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

// Another route to demonstrate more complex testing
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.status(200).json(users);
});

module.exports = app;
