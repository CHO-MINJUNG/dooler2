const {NCPClient} = require('node-sens');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const http = require('http');;
const bodyParser = require('body-parser');
const mysql = require('mysql');
const crypto = require('crypto');
const request = require('request');

//create signature2
const CryptoJS = require('crypto-js');
const SHA256 = require('crypto-js/sha256');
const Base64 = require('crypto-js/enc-base64');
    
dotenv.config();

const { isLoggedIn, isNotLoggedIn } = require('./middlewares/auth_middleware');
const  User  = require('../models/User');

const router = express.Router();

router.post('/message', async (req, res, next) => {
    
    const resultCode = 404;
    const user_phone = req.body.phone;
    const VERIFYCODE = Math.floor(Math.random() * (999999 - 100000)) + 100000;

    const date = Date.now().toString();
    const uri = process.env.SMS_SERVICE_KEY;
    const secretKey = process.env.SMS_SECRET_KEY;
    const accessKey = process.env.SMS_ACCESS_KEY;
    const method = 'POST';
    const space = " ";
    const newLine = "\n";
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
    const url2 = `/sms/v2/services/${uri}/messages`;

    const  hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);

    hmac.update(method);
    hmac.update(space);
    hmac.update(url2);
    hmac.update(newLine);
    hmac.update(date);
    hmac.update(newLine);
    hmac.update(accessKey);

    const hash = hmac.finalize();
    const signature = hash.toString(CryptoJS.enc.Base64);

    request({
		method : method,
		json : true,
		uri : url,
		headers : {
			'Contenc-type': 'application/json; charset=utf-8',
			'x-ncp-iam-access-key': accessKey,
			'x-ncp-apigw-timestamp': date,
			'x-ncp-apigw-signature-v2': signature
		},
		body : {
			'type' : 'SMS',
			'countryCode' : '82',
			'from' : process.env.SMS_FROM_NUMBER,
			'content' : `DOOLER 인증번호 ${VERIFYCODE} 입니다.`,
			'messages' : [
				{
					'to' : `${user_phone}`
				}
			]
		}
	}, function(err, res, html) {
		if(err) console.log(err);
		else {
			resultCode = 200;
			console.log(html);
		}
	});

	res.json({

		'code' : resultCode
	});
    // console.log(req.body.phone);
    // const user_phone = req.body.phone;
    // const VERIFYCODE = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    // const ncp = new NCPClient({
    //     phoneNumber: process.env.SMS_FROM_NUMBER,
    //     serviceId: process.env.SMS_SERVICE_KEY,
    //     secretKey: process.env.SMS_SECRET_KEY,
    //     accessKey: process.env.SMS_ACCESS_KEY,
    //   });
    // try{
    //     console.log(process.env.SMS_SECRET_KEY, process.env.SMS_ACCESS_KEY)
    //     const { success, msg, status } = await ncp.sendSMS({
    //         to: user_phone,
    //         content: `-둘러- \n 인증번호[${VERIFYCODE}]`
    //       });
    //     console.log(success, msg, status)
    // } catch(error){
    //   console.log(error);
    //   return next(error);
    // }
  });

  module.exports = router;