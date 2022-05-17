var express = require('express');
var cors =require('cors');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();
require('dotenv').config();

var citiesRouter = require('./mapService');

app.use(cors({origin:'http://localhost:4200'}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.status(200).send('Hello world');
});

app.use('/get-cities',citiesRouter);

module.exports = app;