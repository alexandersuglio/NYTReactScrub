// var mongoose = require("mongoose");
var express = require('express');
var app = express();
var port = process.env.port || 3000;
var request = require('request');
const cheerio = require('cheerio');
var fs = require('fs');

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.get('/scrape', function(req, res){
    
    url = 'http://www.imdb.com/title/tt1229340/';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { title : "", release : "", rating : ""};

            $('.header').filter(function(){
                var data = $(this);
                title = data.children().first().text();
            
                // We will repeat the same process as above.  This time we notice that the release is located within the last element.
                // Writing this code will move us to the exact location of the release year.

                release = data.children().last().children().text();

                json.title = title;

                // Once again, once we have the data extract it we'll save it to our json object

                json.release = release;
            })
        }
//     })
// })

fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

})

res.send('Check your console!')

    }) ;
})


app.listen(port, function() {
    console.log("app connected and firing!");
});





























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
