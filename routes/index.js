const Url = require('../models/url');
const express = require('express');
const router = express.Router();

//public access for redirecting url

router.get('/:code', async (req, res) => {
	try {
		const url = await Url.getUrlByCode(req.params.code);
		if (url[0]) {
			const newUrl = Object.values(url[0].url).join('');
			res.redirect(newUrl);
		} else {
			res.send('not found');
		}
	} catch (error) {
		res.status(500).json({ message: 'internal server error' });
	}
});

module.exports = router;
