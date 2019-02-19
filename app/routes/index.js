const app = require('express')();

app.get('/', (req, res) => {
  res.send({ message: 'Hello world!' });
});

app.all('*', (req, res) => {
  res.status(404).send({ message: 'Not found.' });
});

module.exports = app;