const { signup, signin } = require('../controller/auth');
const express = require('express');
const { validateSignupRequest, isRequestValidated,validateSigninRequest } = require('../validators/auth');
const router = express.Router();

router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/signin',validateSigninRequest,isRequestValidated, signin);


module.exports = router;