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

app.get('/:id', function (req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var id = req.params.id;
        console.log(id);
        console.log(users.accounts[2]);
        res.end(JSON.stringify(users.accounts[id-1]));
    });
})

app.get('/:name/:accNum', function (req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var name = req.params.name;   
        var accNum = req.params.accNum;  
        var id = null;
        for (var i=0 ; i < users.accounts.length ; i++)
            {
                if (users.accounts[i].accountHolder == name && users.accounts[i].accountNumber == accNum) {
                    id = users.accounts[i].id;
                }
            }
        res.end(JSON.stringify(users.accounts[id-1]));
    });
})

// Updates everything based on ID with body DONT USE
app.put("/:id", function(req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var id = req.params.id;   
        users[id]=req.body;
        res.end(JSON.stringify(users));
    })
})

// Name update
app.put("/:name/:id", function(req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var id = req.params.id;
        var newName = req.params.name;
        users.accounts[id-1].name = newName;
        res.end();
    })
})

// Account number update
app.put("/:accNum/:id", function(req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var id = req.params.id;
        var newAcc = req.params.accNum;
        users.accounts[id-1].accountNumber = newAcc;
        res.end();
    })
})

// Email update
app.put("/:email/:id", function(req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var id = req.params.id;
        var newEmail = req.params.email;
        users.accounts[id-1].email = newEmail;
        res.end();
    })
})

// Phone number update
app.put("/:phone/:id", function(req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var id = req.params.id;
        var newPhone = req.params.phone;
        users.accounts[id-1].phone = newPhone;
        res.end();
    })
})

var server = app.listen(5173, function () {
    console.log("Express App running at http:localhost:5173/");
})