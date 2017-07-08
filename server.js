var mongoose = require("mongoose");
var express = require('express');
var app = express();
var port = process.env.port || 3000;
var request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');



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

    console.log(articles[1].author);
});

app.listen(port, function() {
    console.log("app connected and firing!");
});










// var article = { title: titleText, author: authorText, summary: summaryText};

// console.log( article.title);









// var article = {title:titleText};
// console.log(article);
// var titleFilter = title.find('h2 > a').each(function(){
// var titleText = $(this).text();





// article.title = titleText;
// console.log( article.title);


// });


// var idk3 = idk2.each(function(){






// console.log(idk3);


// var idk4 = $(this).text();

// console.log("title: " + idk4);

// });




// $('p.summary').each(function(){

//     console.log("Headline: " + $(this).text());
// })

// var idk = $("h2.story-heading");
// var idk2 = idk.text();
// console.log(idk2);
// console.log(html);
// var idk = $('p.summary');
// var idkText = idk.text();
// console.log(idkText);

// var ruby = $('p.summary').eq(2);
// var rubyText = ruby.text();
// console.log(rubyText);






//  var Article = $('.headline');
// var ArticleText = Article.text();
// console.log(ArticleText);
// var story = $('.story');
// var storyText = story.text();
// console.log(storyText);

// json.story = story;


















//             var title, release, rating;
//             var json = { title : "", release : "", rating : ""};

//             $('.header').filter(function(){
//                 var data = $(this);
//                 title = data.children().first().text();

//                 // We will repeat the same process as above.  This time we notice that the release is located within the last element.
//                 // Writing this code will move us to the exact location of the release year.

//                 release = data.children().last().children().text();

//                 json.title = title;

//                 // Once again, once we have the data extract it we'll save it to our json object

//                 json.release = release;
//             })
//         }
// //     })
// // })

// fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

//     console.log('File successfully written! - Check your project directory for the output.json file');

// })

// res.send('Check your console!')













// // var url =  "http://nytimes.com/";
// var url = "https://www.indeed.com/cmp/Tellus-LLC/jobs/Aws-Devop-Engineer-d41cf7c32709cfcc?sjdu=QwrRXKrqZ3CNX5W-O9jEvSpBJrjoIwIR5kW7hZB_bomeF8IoQHfuMFrPhmSyPljD9sGoPPrzetXUupd-gcuhuw";

// request(url, function(error, resp, body) {
//     if (!error) {
//         var $ = cheerio.load(body);

// // var test = $('div.story');
// // var testText = test.text();
// // var idk = testText[0];
// // console.log(idk);
// // console.log(testText);

// var test = $('.jobtitle');
// var testText = test.text();
// console.log("Title: " + testText);
//     };

// });












































// var url = "https://www.nytimes.com/";
// var url = "http://www.nytimes.com/pages/todayspaper/index.html?action=Click&module=HPMiniNav&region=TopBar&WT.nav=page&contentCollection=TodaysPaper&pgtype=Homepage";
// var url = "https://mobile.nytimes.com/2017/06/30/briefing/mika-brzezinski-germany-pope-francis.html";

// app.get('/scrape', function(req, res) {

// var url = 'https://news.ycombinator.com';

// request('https://news.ycombinator.com', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });
//     request(url, function(err, res, body) {
//         var $ = cheerio.load(body);

//         $('h6').each(function(i, element){


// var a = $(this).prev();
// var title = a.text();
// console.log(title);





//         })



//         // var title = $('.summary');
//         // var titleText = title.text();
//         // console.log("Article body: " + titleText);
//     });

// // });



// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/index.html");
// });





// mongoose.connect('mongodb://localhost:27017/nytreact');

// var db = mongoose.connection;

// db.on('error', function(err){
//  console.log("database connection error has occured" + err);
// });

// db.on('openUri()', function(){
//  console.log("database connection successful!");
// });



// if (process.env.MONGODB_URI){
//  var db = mongoose.connect(MONGODB_URI);
// }
// else {

// var db = mongoose.connect('mongodb://localhost:27017/nytreact');

// }

// db.on('error', function(err){
//  console.log('Database connection error: ' + err);
// });

// db.on('connect', function(){
//  console.log('Database connected!');
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
