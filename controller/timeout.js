'use strict';
const timeoutService = require('../service/timeout');

exports.timeout = async () => {
	return await timeoutService.timeout();
};
