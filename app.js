let express = require('express');
const path = require("path");

let app = express();

app.use('/static', express.static('static'))


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});
module.exports = app;