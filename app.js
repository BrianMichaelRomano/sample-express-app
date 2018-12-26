const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/', (req, res, next) => {
  res.send('Hello Express!');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));