// var ruby = console.log("hey it works!");

// module.exports = ruby;


var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var articleSchema = new Schema({
	title: String,
	author: String,
	summary: String
});

var Article = mongoose.model("Article", articleSchema);
module.exports = Article;