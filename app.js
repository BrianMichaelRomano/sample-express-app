const express = require('express');

const app = express();

const HOST = 'localhost';
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/welcome', (req, res, next) => {
  res.render('welcome');
});

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(PORT, HOST, () => console.log(`Server listening at ${HOST} on port ${PORT}`));
