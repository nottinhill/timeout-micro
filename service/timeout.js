// 'use strict';
//
// if (process.env.NODE_ENV === 'development') {
//     const sleep = require('then-sleep');
// 	const logger = require('../lib/logger');
//
// 	module.exports.timeout = async(req,res) => {
//
//         if (!sanitizer.sanitizer("number",req)) {
//         	throw createError(422, 'Unprocessable Entity')
//         }
//
// 		return await sleep(req)
// 			.then(result => {
// 				return "Ready!";
// 			})
// 			.catch(err => {
// 				logger(err, this);
// 				console.info(err, this);
// 				return err;
// 			});
// 	};
// }
//
// if (process.env.NODE_ENV === 'production') {
// 	// define production here
// }
