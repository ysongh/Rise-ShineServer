const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./config/keys').mongoURI;
const app = express();

const postRoutes = require("./routes/post");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Server Work'));
app.use('/post', postRoutes);

const port = process.env.PORT || 8080;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => console.log('Database Connected'));
    })
    .catch(err => {
        console.log(err);
    });