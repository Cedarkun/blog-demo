const mysql = require("mysql");
const pool = mysql.createPool({
    host:'cedarz.top',
    user:'cedar',
    password:'Zss19950918',
    database:'test',
    multipleStatements: true
});
module.exports=pool;
