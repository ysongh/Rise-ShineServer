const express = require('express');
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

const app = express();

app.get('/', (req, res) => res.send('Server Work'));

const port = process.env.PORT || 8080;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => console.log('Database Connected'));
    })
    .catch(err => {
        console.log(err);
    });