var mongoose = require("mongoose");
var express = require('express');
var app = express();
var port = process.env.port || 3000;
// var articles = require('./articles.js');
var path = require('path');
var request = require('request');
const cheerio = require('cheerio');


mongoose.connect('mongodb://localhost/NYTarticles');
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


// var mymodel = mongoose.model('ModelName', PoliticsNYT);

// url = 'https://newyorktimes.com/';
url = "https://www.nytimes.com/section/politics?WT.nav=page&action=click&contentCollection=Politics&module=HPMiniNav&pgtype=Homepage&region=TopBar";
request(url, function(error, response, html) {
    if (!error) {
        var $ = cheerio.load(html);

        /// Gets the div with class 'story-body'
        var base = $('.highlights .story-body');
        var articles = [];

        for (var j=0; j < base.length; ++j) {
            // console.log(j);
            articles.push({
                title: '',
                author: '',
                summary: '',
            });
        }

        // create for loop that is lenght of the base
        // within loop add empty objects to articles array
        // push({
        //     title: '',
        //     author: '',
        //     summary: '',
        // })
        // 
        // then 

        /// Scrape Article Title ///
        var titleFilter = base.find('h2 > a');
        titleFilter.each(function(i) {
            articles[i].title = $(this).text();

        });

        /// Scrape Article Author
        // var authorFilter = base.find('p > span').filter(".author");
        var authorFilter = base.find('.byline > .author');

        authorFilter.each(function(i) {
            articles[i].author = $(this).text();
        });


        /// Scrape Article Summary
        var summaryFilter = base.find('p.summary');

        summaryFilter.each(function(i) {
            articles[i].summary = $(this).text();
        });

    };

    // console.log(articles);
});

app.listen(port, function() {
    console.log("app connected and firing!");
});























