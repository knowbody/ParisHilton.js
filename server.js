var express = require('express'),
    app = express(),
    cheerio = require('cheerio'),
    request = require('request');

var port = process.env.port || 8000;

app.get('/', function (req, res) {

    var url = 'http://www.google.com';

    request(url, function (err, resp, html) {
        if (err) {
            throw err;
        }
        var $ = cheerio.load(html);
        $('head').remove();
        res.send($.html());
    });
});

app.listen(port);
console.log('no head on port: ' + port);

exports = module.exports = app;




