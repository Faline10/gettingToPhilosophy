var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
  // res.send(index.html);
});

app.get('/philosophy_path', function (req, res) {
  console.log('logging start: ', req.query.start);
  res.send('start at: ' + req.query.start);

});

app.listen(3000, function () {
  console.log('Getting to Philosophy listening on port 3000!');
});

