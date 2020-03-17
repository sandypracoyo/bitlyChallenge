const Url = require('../models/url');
const shortId = require('shortid');
const validUrl = require('valid-url');
const response = require('../helper/response');
const express = require('express');
const router = express.Router();
const passport = require('passport');

//post new url
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	const baseUrl = req.headers.host;
	const urlCode = req.body.shortcode;
	const generateCode = shortId.generate();
	let today = new Date();
	let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	
	//cek apakah url valid
	if (!validUrl.isUri(req.body.url)) {
		response.error(res, 400, 'Url is not valid !');
	} else {
		//cek apakah user mengisi urlCode
		if (urlCode) {
			Url.getUrlByCode(urlCode)
				.then((url) => {
					const cekCode = url[0];
					if (cekCode) {
						response.error(res, 400, 'ShortUrl already use !');
					} else {
						const data = {
							title: req.body.url,
							short_url: baseUrl + '/' + urlCode,
							shortcode: urlCode,
							url: req.body.url,
							created_at : date
						};
						const user = req.user[0];
						const newData = Object.assign(data, user);
						Url.addUrl(newData).then((addurl) => response.success(res, addurl));
					}
				})
				.catch((error) => response.error(res, 500, error));
		} else {
			const data = {
				title: req.body.url,
				short_url: baseUrl + '/' + generateCode,
				shortcode: generateCode,
				url: req.body.url,
				created_at: date
			};
			const user = req.user[0];
			const newData = Object.assign(data, user);
			Url.addUrl(newData)
				.then((randomurl) => response.success(res, randomurl))
				.catch((error) => response.error(res, 500, error));
		}
	}
});

//get all url by current user
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	const user = Object.values(req.user[0]).toString();
	Url.getUrlByIdUser(user)
		.then((allurl) => {
			if (!allurl[0]) {
				response.error(res, 400, 'No Url for this user');
			} else {
				response.success(res, allurl);
			}
		})
		.catch((error) => response.error(res, 500, error));
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Url.getUrlById(req.params.id)
		.then((url) => {
			if (url[0]) {
				Url.deleteUrl(req.params.id).then(() => response.success(res));
			} else {
				response.error(res, 404, 'No Url find !');
			}
		})
		.catch((err) => response.error(res, 500, err));
});


module.exports = router;
