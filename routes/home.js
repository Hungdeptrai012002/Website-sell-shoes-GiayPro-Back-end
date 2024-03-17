var router = require('express')();
var db = require('./dbconnect');

router.get('/spdm/:id', function(req, res, next) {
    const Id = req.params.id;
    // Thực hiện truy vấn SQL để lấy ra sản phẩm tương tự
    const sql = 'SELECT * from san_pham where id_loai =?';

    db.query(sql, [Id], function(err, results) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(results);
    });
});

router.get("/get-once/:id", function (req, res) {
    var query = "SELECT * FROM san_pham WHERE id=" + req.params.id;
    db.query(query, function (error, result) {
      if (error) res.send("Lổi thao tác csdl");
      res.json(result);
    });
  });
module.exports = router;