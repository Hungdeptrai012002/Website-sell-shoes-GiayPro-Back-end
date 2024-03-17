const express = require("express");
const route = express.Router();
var db = require('./dbconnect');
var multer = require("multer");


//read all
route.get('/getall', function (req, res) {
    var query = 'SELECT * FROM san_pham';
    db.query(query, function (error, result) {
        if (error) res.send('Lổi thao tác csdl');
        res.json(result);
    });
});
//read once
route.get('/get-once/:id', function (req, res) {
    var query = 'SELECT * FROM san_pham WHERE id=' + req.params.id;
    db.query(query, function (error, result) {
        if (error) res.send('Lổi thao tác csdl');
        res.json(result);
    });
});
//edit
route.post('/edit',function(req,res){
    var query = "UPDATE san_pham SET  `id_loai`=?, `id_ncc`=?,`anh`=?,`ten`=?,`mota`=?, `giaban`=?,`giakm`=?, `soluong`=?,  `ghichu`=?, `trangthai`=?, `updated_at`=NOW(), `created_at`=NOW() WHERE `id`=?";
    db.query(query, [req.body.id_loai, req.body.id_ncc,req.body.anh, req.body.ten, req.body.mota, req.body.giaban, req.body.giakm, req.body.soluong, req.body.ghichu, req.body.trangthai, req.body.id], function(error, result) {
        if (error) res.send('Lỗi thao tác csdl');
        res.json(result);
    });
});
// route.post('/edit/:id', function (req, res) {
//     console.log(req.body)
//     var query =
//         "UPDATE san_pham SET ten='" +
//         req.body.ten +
//         "',anh='" +
//         req.body.anh +
//         "',giaban='" +
//         req.body.giaban +
//         "',mota='" +
//         req.body.mota +
//         "',soluong='" +
//         req.body.soluong +
//         "',id_loai='" +
//         req.body.id_loai +
//         "',id_ncc='" +
//         req.body.id_ncc +
//         "', updated_at=NOW() WHERE id=" +
//         req.params.id;
//     db.query(query, function (error, result) {
//         if (error) res.json({err: err});
//         res.json(result);
//     });
// });

route.post('/upload',(req,res)=>{
    var filepath;
    var fileupload;
    console.log(res.files);
    if (!req.files || Object.keys(req.files).length===0){
        return res.status(400).send('Khong co file upload.');
    }
    fileupload = req.files.file;
    filepath='D:/Angular/myapp/src/assets/home/img/sanpham/'+fileupload.name;
    console.log(filepath);
    fileupload.mv(filepath,(err)=>
    {
        if(err) res.status(500).send('Loi upload file');
        else res.json(fileupload);
    })
});
// route.post('/create', function (req, res) {
  
//     try{
//         console.log(req.body)
//         var query ='call createPro(?)'
        
//         let data= db.query(query, [JSON.stringify(req.body)]);
//         console.log(data)

//         res.status(200).json({data:data})
//     }
//     catch(err){
//         res.json({ message: err.message });

//     }
  
// });
route.post('/create',function(req,res){
    var query = "INSERT INTO san_pham(id_loai, id_ncc, anh, ten, mota, giaban, giakm, soluong, ghichu, trangthai, created_at, updated_at) values('"+req.body.id_loai+"','"+req.body.id_ncc+"','"+req.body.anh+"','"+req.body.ten+"','"+req.body.mota+"','"+req.body.giaban+"','"+req.body.giakm+"','"+req.body.soluong+"','"+req.body.ghichu+"','"+req.body.trangthai+"',NOW(),NOW())";
    db.query(query,function(error,result){
        if(error) res.send('Lổi thao tác csdl');
        res.json(result);
    });
});  
//add
// route.post('/create', function (req, res) {
//     var query =
//         "INSERT INTO san_pham(ten, anh, mota, giaban, soluong, id_loai, id_ncc, ngaythem,created_at) values('" +
//         req.body.ten +
//         "','" +
//         req.body.anh +
//         "','" +
//         req.body.mota +
//         "','" +
//         req.body.giaban +
//         "','" +
//         req.body.soluong +
//         "','" +
//         req.body.id_loai +
//         "','" +
//         req.body.id_ncc +
//         "', NOW(), NOW())";
//     db.query(query, function (error, result) {
//         if (error) res.send('Lổi thao tác csdl');
//         res.json(result);
//     });
// });
//remove
route.get('/delete/:id', function (req, res) {
    var query = 'DELETE FROM san_pham WHERE id=' + req.params.id;
    console.log(query);
    db.query(query, function (error, result) {
        if (error) res.send({err:'Lổi thao tác csdl'});
        res.json(result);
    });
});
//Search
route.get('/search', function (req, res) {
    res.send('ket qua search');
});
module.exports = route;
