var express = require('express');
var router = express.Router();
var path = require('path');
var duongdan = path.join(__dirname, '../public');

router.post('/', (req, res) => {
    var filepath;
    var fileupload;
    if (!req.files) res.status(400).send('ban chua chon file gui');
    fileupload = req.files.fileanh;
    filepath = duongdan + '/upload/' + fileupload.name;
    console.log(filepath);
    fileupload.mv(filepath, function (error) {
        if (error) res.status(500).send('Loi upload file len server');
        res.status(200).send('Da uploaded file len server');
    });
});

module.exports = router;
