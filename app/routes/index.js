const app = require('express')();

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Not found.' });
});

module.exports = app;