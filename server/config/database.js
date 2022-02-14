const mysql = require('mysql');
const dotenv = require('dotenv');
const mysql_pool = require('mysql2/promise');

dotenv.config();

const db_info ={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PW,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME,
}

module.exports = {
    init: function() {
        return mysql.createConnection(db_info);
    },
    connect: function(connection) {
        connection.connect(function(err) {
            if(err) console.error('mysql connection error : '+ err);
            else console.log('mysql is connected successfully!');
        })
    },
    pool: function() {
        return mysql_pool.createPool(db_info);
    },
    db_info
}