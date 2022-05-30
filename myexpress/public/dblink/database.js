var mysql = require('mysql');
var pool = mysql.createConnection({
    host: '121.199.49.79',
    port: '3306',
    user: 'root',
    password: '123',
    database: 'JS'
});

module.exports = {
    pool
}