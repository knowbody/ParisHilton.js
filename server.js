var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cheerio = require('cheerio'),
    request = require('request');

app.use(bodyParser());
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.post('/', function (req, res) {
    var url = req.body.url;

    // magic happens here
    request(req.body.url, function (err, resp, html) {
        if (err) {
            res.redirect('/');
        }
        var $ = cheerio.load(html);
        $('head').remove();
        res.send($.html());
    });

});

app.listen(port, function (){
    console.log('<Headless> on port: ' + port);
});
