//require express
var express = require('express');
//reqiure body parser
var bodyParser = require('body-parser');
//Require mongoose
var mongoose = require('mongoose');
//Require node fetch
var fetch = require('node-fetch');
//create express object, call express
var app = express();
//get port info
const port = process.env.PORT || 3000;
//tell app to use EJS for templates
app.set('view engine', 'ejs');
//Make styles public
app.use(express.static("public"));
//tell app to use Body parser
app.use(bodyParser.urlencoded({ extended: true }));


// BODY

//server setup
app.listen(port, function () {
    console.log('Listening on port ' + port)
});
