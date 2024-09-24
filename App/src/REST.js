var express = require('express');
var app = express();
var fs = require("fs");

// Gets all the users and puts them into data
app.get('/', function (req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        res.end( data );
    });
})

var bodyParser = require('body-parser')
app.use(bodyParser.json() );      
app.use(bodyParser.urlencoded({  extended: true }));

//updates based on ID with body
app.put("/:id", function(req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var id = req.params.id;   
        
        // change something based on params
        // find a variable from the body inputted (PAss through an input or smth)
        // replace this thing so it doesn't remove everything from the json file
        users[id]=req.body;

        res.end( JSON.stringify(users));
    })
})

var server = app.listen(5000, function () {
    console.log("Express App running at http://127.0.0.1:5000/");
})