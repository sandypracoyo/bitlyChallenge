const db = require('../config/mysql');
const crypto = require('crypto');
const md5 = (password) => crypto.createHash('md5').update(password).digest('hex');

exports.getAllUser = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM user', (error, result) => {
			error ? reject(error) : resolve(result);
		});
	});
};

exports.getUserByAuth = (email, password) => {
	return new Promise((resolve, reject) => {
		db.query(
			'SELECT * FROM user where email = ? AND password = ?',
			[ email, md5(password) ],
			(error, result) => {
				error ? reject(error) : resolve(result);
			}
		);
	});
};

exports.getUserByEmail = (email) => {
	return new Promise((resolve, reject) => {
		db.query('SELECT email FROM user WHERE email = ?', email, (error, result) => {
			error ? reject(error) : resolve(result);
		});
	});
};

exports.getUserById = (id) => {
	return new Promise((resolve, reject) => {
		db.query('SELECT user_id FROM user WHERE user_id = ?', id, (error, result) => {
			error ? reject(error) : resolve(result);
		});
	});
};

exports.addUser = (user) => {
	return new Promise((resolve, reject) => {
		user.password = md5(user.password);
		db.query('INSERT INTO user SET ?', user, (error) => {
			error ? reject(error) : resolve(user);
		});
	});
};
