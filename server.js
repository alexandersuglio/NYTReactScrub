var mongoose = require("mongoose");
var express = require('express');
var app = express();
var port = process.env.port || 3000;
var request = require('request');
const cheerio = require('cheerio');

var url = "https://www.nytimes.com/";
// var url = "http://www.nytimes.com/pages/todayspaper/index.html?action=Click&module=HPMiniNav&region=TopBar&WT.nav=page&contentCollection=TodaysPaper&pgtype=Homepage";
// var url = "https://mobile.nytimes.com/2017/06/30/briefing/mika-brzezinski-germany-pope-francis.html";

// app.get('/scrape', function(req, res) {

// var url = 'https://news.ycombinator.com';

// request('https://news.ycombinator.com', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });
    request(url, function(err, res, body) {
        var $ = cheerio.load(body);

        $('h6').each(function(i, element){


var a = $(this).prev();
var title = a.text();
console.log(title);




        	
        })



        // var title = $('.summary');
        // var titleText = title.text();
        // console.log("Article body: " + titleText);
    });

// // });


// app.listen(port, function() {
//     console.log("app connected and firing!");
// });

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






// example online

 //    $('span.comhead').each(function(i, element){

 // var a = $(this).prev();
 //      var rank = a.parent().parent().text();
 //      var title = a.text();
 //      var url = a.attr('href');
 //      var subtext = a.parent().parent().next().children('.subtext').children();
 //      var points = $(subtext).eq(0).text();
 //      var username = $(subtext).eq(1).text();
 //      var comments = $(subtext).eq(2).text();