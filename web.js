const average = require('image-average-color');
var express = require('express');
var app = express();

const port = 443;
var rgb;

app.get('/', function(req, res) {
    average('images/image.jpg', (err, color) => {
        if (err) throw err;
        rgb = color;
        res.send('Hello World' + rgb.toString());
    });

})

app.listen(port, function(server) {
    console.log(`Example app listening on port ${port}`);;
})