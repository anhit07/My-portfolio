var express = require('express');
var ctrSendMail = require('../controllers/sendmail.controllers.js');

var router = express.Router();

router
	.route('/sendmail')
	.post(ctrSendMail.sendaMail);

module.exports = router;