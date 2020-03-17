module.exports = {
	success: (res, data) => {
		return res.json({
			status: true,
			message: 'Successful',
			data
		});
	},
	error: (res, code, message) => {
		return res.status(code).json({
			status: false,
			message
		});
	}
};
