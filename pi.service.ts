const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let objectDetected = false;

app.get('/objectDetected', (req, res) => {
    res.send(objectDetected);
});

app.post('/foundObject', (req, res) => {
    objectDetected = true;
    res.send(objectDetected);
});

app.listen(port, () => console.log(`listening on port ${port}!`))