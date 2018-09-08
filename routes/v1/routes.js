'use strict';
const {send} = require('micro');
const {router, get, post} = require('microrouter');
const cors = require('micro-cors')();
// const controller = require('../../controller/index');
const sleep = require('then-sleep');

const timeout = async (req, res) => {
	let sec = req.params.sec;
	let ms = sec * 1000;
	await sleep(ms);
	send(res, 200, 'HTTP 200 - OK (Waited for ' + sec + ' seconds)');
};

const notFound = async (req, res) => {
	send(res, 404, 'HTTP 404 - Endpoint not found');
};

module.exports = cors(router(
	get('/timeout/:sec', timeout),
	get('/*', notFound),
	post('/*', notFound)
));
