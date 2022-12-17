var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var objectDetected = false;
app.get('/objectDetected', function (req, res) {
    res.send(objectDetected);
});
app.post('/foundObject', function (req, res) {
    objectDetected = true;
    res.send(objectDetected);
});
app.listen(port, function () { return console.log("listening on port ".concat(port, "!")); });
