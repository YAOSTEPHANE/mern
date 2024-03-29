const express = require('express');
const { signup, signin, signout} = require('../../controller/admin/auth');
const {requireSignin} = require('../../common-middleware');
const router = express.Router();
const { validateSignupRequest, isRequestValidated,validateSigninRequest } = require('../../validators/auth');



router.post('/admin/signup',validateSignupRequest,isRequestValidated  ,signup);
router.post('/admin/signin',validateSigninRequest,isRequestValidated, signin);
router.post('/admin/signout',signout )

module.exports = router;