const db = require('../config/mysql');

exports.getUrlByCode = (code) => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM short_url where shortcode = ?', code, (error, result) => {
			error ? reject(error) : resolve(result);
		});
	});
};

exports.addUrl = (url) => {
	return new Promise((resolve, reject) => {
		db.query('INSERT INTO short_url SET ?', url, (error) => {
			error ? reject(error) : resolve(url);
		});
	});
};

exports.getUrlById = (id) => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM short_url where id = ?', id, (error, result) => {
			error ? reject(error) : resolve(result);
		});
	});
};

exports.getUrlByIdUser = (id) => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM short_url where user_id = ?', id, (error, result) => {
			error ? reject(error) : resolve(result);
		});
	});
};

exports.getIdUrlByCode = (code) => {
	return new Promise((resolve, reject) => {
		db.query('SELECT id FROM short_url where shortcode = ?', code, (error, result) => {
			error ? reject(error) : resolve(result);
		});
	});
};

exports.deleteUrl = (id) => {
	return new Promise((resolve, reject) => {
		db.query('DELETE FROM short_url WHERE id = ?', id, (error, result) => {
			error ? reject(error) : resolve(result);
		});
	});
};

exports.addTrack = (track) => {
	return new Promise((resolve, reject) => {
		db.query('INSERT INTO track SET ?', track, (error, result) => {
			error ? reject(error) : resolve(result);
		});
	});
};
