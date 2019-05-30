const express = require ('express');
const { json } = require ('body-parser');
const app = express();
const User = require('../schema/user');


app.use(json());

app.get('/hotel', (req, res) => {
 res.status(200).json({ message: "Hello World!" });
});

app.post('/user', async (req,res) => {
    console.log(req.body);
    
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
    });
    console.log(newUser);
    newUser.save().then(() => {
        res.status(200).send(newUser);
    }).catch(e => {
        res.status.json(e);
    })
});

module.exports = app;
