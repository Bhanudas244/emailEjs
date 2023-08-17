const express = require('express');
const router = express.Router()
const MailController = require('../controller/MailController');





router.get('/', MailController.index);
router.get('/mail', MailController.Mail);
router.get('/validation', MailController.valid);
router.post('/emailval', MailController.emailValidator);
router.post('/sendEmails', MailController.sendEmail);
router.get('/valid', MailController.validData);
router.get('/unvalid', MailController.unvalid);




module.exports = router