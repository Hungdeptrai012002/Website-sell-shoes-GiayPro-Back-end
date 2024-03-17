const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hunghung1',
    database: 'bandouong',
});
module.exports = connection;
