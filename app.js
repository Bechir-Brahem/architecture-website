let express = require('express');
const path = require("path");

let app = express();

app.use('/static', express.static('static'))


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'contact.html'));
});
app.get('/casestudy', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'case-study.html'));
});

module.exports = app;