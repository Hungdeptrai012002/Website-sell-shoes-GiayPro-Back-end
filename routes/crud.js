var route = require('express')();
var db = require('./dbconnect');
//read all
route.get('/getall', function (req, res) {
    var query = 'SELECT * FROM loai_sp';
    db.query(query, function (error, result) {
        if (error) res.send('Lổi thao tác csdl');
        res.json(result);
    });
});
//read once
route.get('/get-once/:id', function (req, res) {
    var query = 'SELECT * FROM loai_sp WHERE id=' + req.params.id;
    db.query(query, function (error, result) {
        if (error) res.send('Lổi thao tác csdl');
        res.json(result);
    });
});
//edit
route.post('/edit/:id', function (req, res) {
    var query =
        "UPDATE loai_sp SET tenloai='" +
        req.body.tenloai +
        "',trangthai='" +
        req.body.trangthai +
        "', updated_at=NOW() WHERE id=" +
        req.params.id;
    db.query(query, function (error, result) {
        if (error) res.send('Lổi thao tác csdl');
        res.json(result);
    });
});
//add
route.post('/create', function (req, res) {
    var query =
        "INSERT INTO loai_sp(tenloai,trangthai,ngaythem,created_at,updated_at) values('" +
        req.body.tenloai +
        "','" +
        req.body.trangthai +
        "', NOW(), NOW(),NOW())";
    db.query(query, function (error, result) {
        if (error) res.send('Lổi thao tác csdl');
        res.json(result);
    });
});
//remove
route.get('/delete/:id', function (req, res) {
    var query = 'DELETE FROM loai_sp WHERE id=' + req.params.id;
    console.log(query);
    db.query(query, function (error, result) {
        if (error) res.json({ message: 'Lỗi thao tác cơ sở dữ liệu!' });
        res.json(result);
    });
});
//Search
route.get('/search', function (req, res) {
    res.send('ket qua search');
});
module.exports = route;
