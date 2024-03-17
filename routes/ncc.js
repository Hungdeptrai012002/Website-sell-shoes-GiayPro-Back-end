var route = require('express')();
var db = require('./dbconnect');
//read all
route.get('/getall', function (req, res) {
    var query = 'SELECT * FROM nha_cung_cap';
    db.query(query, function (error, result) {
        if (error) res.send('Lổi thao tác csdl');
        res.json(result);
    });
});
//read once
route.get('/get-once/:id', function (req, res) {
    var query = 'SELECT * FROM nha_cung_cap WHERE id=' + req.params.id;
    db.query(query, function (error, result) {
        if (error) res.send('Lổi thao tác csdl');
        res.json(result);
    });
});
//edit
route.post('/edit/:id', function (req, res) {
    var query =
        "UPDATE nha_cung_cap SET tenncc='" +
        req.body.tenncc +
        "',diachi='" +
        req.body.diachi +
        "',email='" +
        req.body.email +
        "',sdt='" +
        req.body.sdt +
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
        "INSERT INTO nha_cung_cap(tenncc,diachi,email,sdt,trangthai,created_at,updated_at) values('" +
        req.body.tenncc +
        "','" +
        req.body.diachi +
        "','" +
        req.body.email +
        "','" +
        req.body.sdt +
        "','" +
        req.body.trangthai +
        "', NOW(),NOW())";
    db.query(query, function (error, result) {
        if (error) res.send('Lổi thao tác csdl');
        res.json(result);
    });
});
//remove
route.get('/delete/:id', function (req, res) {
    var query = 'DELETE FROM nha_cung_cap WHERE id=' + req.params.id;
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
