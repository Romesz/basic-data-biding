var request = require('request');
var cheerio = require('cheerio');
var url = 'http://www.imdb.com/title/tt1853728/';
	
request(url, function (error, response, body) {
    if(!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        var movieName = $('.itemprop').html();
        var movieRate = $('.titlePageSprite').html();
        var description = $('p[itemprop="description"]').html();
        console.log('It’s ' + movieName + ' and rating: ' + movieRate);
        console.log('The description is: ' + description);
    }
    else {
        console.log('Error: ' + error);
    }
});