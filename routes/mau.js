var express = require('express');
var route = express();

route.get('/hello', function (req, res) {
    res.send('<h1>Day la trang Hello</h1>');
});

route.get('/mang', function (req, res) {
    var mang = ['buoi', 'cam', 'quyt', 'chanh'];
    res.json(mang);
});

route.get('/obj', function (req, res) {
    var obj = [{ id: 1, name: 'nguyen cao hung' }];
    res.json(obj);
});

route.get('/mobj', function (req, res) {
    var mobj = [
        { id: 1, name: 'nguyen cao hung' },
        { id: 2, name: 'nguyen cao hung' },
        { id: 3, name: 'nguyen cao hung' },
    ];
    res.json(mobj);
});

module.exports = route;
