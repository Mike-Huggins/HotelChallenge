const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();

app.get('/hotel', (req, res) => {
 res.status(200).json({ message: "Hello World!" });
});

module.exports = app;

