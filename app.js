const express = require('express');
const path = require('path');

const app = express();

const rootDir = require('./util/rootDir.js');

const HOST = 'localhost';
const PORT = process.env.PORT || 5000;

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(rootDir, 'public')));

app.get('/welcome', (req, res, next) => {
  res.render('welcome');
});

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(PORT, HOST, () => console.log(`Server listening at ${HOST} on port ${PORT}`));
