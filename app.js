const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.send('index.html');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
