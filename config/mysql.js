const mysql = require('mysql2');

require('dotenv').config({ path: '.env' });

module.exports = mysql.createConnection({
	user: process.env.MYSQL_USERNAME,
	password: '',
	database: process.env.MYSQL_DATABASE
});
