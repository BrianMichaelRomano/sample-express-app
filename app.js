const express = require('express');

const app = express();

const HOST = 'localhost';
const PORT = process.env.PORT || 5000;

app.get('/welcome', (req, res, next) => {
  res.send('Welcome');
});

app.get('/', (req, res, next) => {
  res.send('Hello Express updated!');
});

app.listen(PORT, HOST, () => console.log(`Server listening at ${HOST} on port ${PORT}`));
