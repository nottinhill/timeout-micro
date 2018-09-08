'use strict';
const {send} = require('micro');
const {router, get, post} = require('microrouter');
const cors = require('micro-cors')();
// const controller = require('../../controller/index');
const sleep = require('then-sleep');

/*
let auth = async (req, res) => {
	const user = await auth0(req, process.env.AUTH0_DOMAIN);
	if (!user) {
		return send(res, 403, {error: 'Forbidden'});
	}
	return;
};
*/

const timeout = async (req, res) => {

    await sleep(60000); // 1 = 1ms
    return 'Pong.';

// 	console.log(req.params.sec);
// 	await auth(req, res);
// 	const timeoutResponse = await controller.timeout.timeout(req.params.timeout);
// 	send(res, 200, timeoutResponse);
};

const notFound = async (req, res) => {
	send(res, 404, 'HTTP 404 - Endpoint not found');
};

module.exports = cors(router(
	get('/timeout/:sec', timeout),
	get('/*', notFound),
	post('/*', notFound)
));
