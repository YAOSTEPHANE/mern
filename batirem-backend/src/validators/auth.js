const { check, validationResult } = require('express-validator');

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('Prénom obligatoire'),
    check('lastName')
    .notEmpty()
    .withMessage('Nom obligatoire'),
    check('email')
    .isEmail()
    .withMessage('Adresse email obligatoire'),
    check('password')
    .isLength({ min: 8 })
    .withMessage('Mot de passe obligatoire')
];

exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('Adresse email obligatoire'),
    check('password')
    .isLength({ min: 8 })
    .withMessage('Mot de passe obligatoire')
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}
