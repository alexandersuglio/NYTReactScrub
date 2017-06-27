var mongoose = require("mongoose");
var express = require('express');
var app = express();
var port = process.env.port || 3000;
var request = require('request');
const cheerio = require('cheerio');

var url = "https://www.nytimes.com/";

// app.get('/scrape', function(req, res) {



    request(url, function(err, res, body) {
        var $ = cheerio.load(body);
        var title = $('.summary');
        var titleText = title.text();
        console.log(titleText);
    });

// });


app.listen(port, function() {
    console.log("app connected and firing!");
});

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/index.html");
// });





// mongoose.connect('mongodb://localhost:27017/nytreact');

// var db = mongoose.connection;

// db.on('error', function(err){
// 	console.log("database connection error has occured" + err);
// });

// db.on('openUri()', function(){
// 	console.log("database connection successful!");
// });



// if (process.env.MONGODB_URI){
// 	var db = mongoose.connect(MONGODB_URI);
// }
// else {

// var db = mongoose.connect('mongodb://localhost:27017/nytreact');

// }

// db.on('error', function(err){
// 	console.log('Database connection error: ' + err);
// });

// db.on('connect', function(){
// 	console.log('Database connected!');
// });
