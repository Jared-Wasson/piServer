var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
function makeArray(w, h, val) {
    var arr = [];
    for (var i = 0; i < h; i++) {
        arr[i] = [];
        for (var j = 0; j < w; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}
var grid = makeArray(5, 5, 0);
var robots = [];
var objectDetected = false;
var lastPosition = {};
app.get('/objectDetected', function (req, res) {
    res.send(objectDetected);
});
app.post('/foundObject', function (req, res) {
    objectDetected = true;
    res.send(objectDetected);
});
app.get('/getNextPosition/:id', function (req, res) {
    var id = req.params.id;
    var currentPosition = req.params.position;
    res.send();
});
app.listen(port, function () { return console.log("Hello world app listening on port ".concat(port, "!")); });
