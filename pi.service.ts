const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function makeArray(w: number, h: number, val: number): number[][] {
    var arr: number[][] = [];
    for(let i = 0; i < h; i++) {
        arr[i] = [];
        for(let j = 0; j < w; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}

const grid = makeArray(5,5,0);
const robots: number[] = [];
let objectDetected = false;
let lastPosition = {};

app.get('/objectDetected', (req, res) => {
    res.send(objectDetected);
});

app.post('/foundObject', (req, res) => {
    objectDetected = true;
    res.send(objectDetected);
});

app.get('/getNextPosition/:id', (req, res) => {
    const id = req.params.id;
    const currentPosition = req.params.position;
    res.send();

})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))