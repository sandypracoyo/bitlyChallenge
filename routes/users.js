const express = require('express');
const router = express.Router();
const users = require('../models/users');
const response = require('../helper/response');
require('dotenv').config({ path: '.env' });
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	users
		.getUserByAuth(email, password)
		.then((auth) => {
			if (!auth[0]) {
				response.error(res, 404, 'User tidak ditemukan');
			} else {
				const data = auth[0];
				const payload = {
					id: data.user_id,
					user: data.username,
					email: data.email
				};
				jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
					res.json({
						status: 'ok',
						token: 'Bearer ' + token
					});
				});
			}
		})
		.catch((error) => response.error(res, 500, error));
});

router.post('/register', async (req, res) => {
	try {
		const checkEmail = await users.getUserByEmail(req.body.email);
		if (!checkEmail[0]) {
			const result = await users.addUser(req.body);
			response.success(res, result);
		} else {
			response.error(res, 400, 'Email already use');
		}
	} catch (error) {
		response.error(res, 500, 'oopss');
	}
});
module.exports = router;
