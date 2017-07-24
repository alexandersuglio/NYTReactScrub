var mongoose = require("mongoose");
var express = require('express');
var app = express();
var port = process.env.port || 3000;
var path = require('path');
var request = require('request');
const cheerio = require('cheerio');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

var Article = require('./schema.js');


mongoose.connect('mongodb://localhost/NYTarticles');
var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});


//routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/scrape', function(req, res) {

    url = "https://www.nytimes.com/section/politics?WT.nav=page&action=click&contentCollection=Politics&module=HPMiniNav&pgtype=Homepage&region=TopBar";
    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            /// Gets the div with class 'story-body'
            var base = $('.highlights .story-body');
            var articles = [];

            for (var j = 0; j < base.length; ++j) {
                // console.log(j);
                articles.push({
                    title: '',
                    author: '',
                    summary: ''
                });
            }

            /// Scrape Article Title ///
            var titleFilter = base.find('h2 > a');
            titleFilter.each(function(i) {
                articles[i].title = $(this).text();

            });

            /// Scrape Article Author
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


        for (j = 0; j < articles.length; j++) {


            var idk = new Article(articles[j]);
            idk.save(function(err, doc) {
                if (err) {
                    console.log(err);
                }

            });
        };

        res.send("Scrape Complete");

    });

});


app.get("/articles", function(req, res) {
    // Grab every doc in the Articles array
    Article.find({}, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    });
});


app.get('/articles/:id', function(req, res){

Article.findById(req.params.id, function(error, doc){

  if (error) {
            console.log(error);
        }
 else {
        res.json(doc);
        }




});


});


app.get("/articles/delete/:id", function(req, res) {

    Article.findByIdAndRemove(req.params.id, function(error, doc) {

        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
        res.redirect('/articles');
        }

    });


});

app.listen(port, function() {
    console.log("app connected and firing!");
});