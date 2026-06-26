const { body, validationResult } = require('express-validator');
const { isDisposableEmail } = require('../utils/disposableEmail');

const contactValidationRules = () => {
    return [
        body('name').trim().notEmpty().withMessage('Name is required').escape(),
        body('email')
            .trim()
            .notEmpty().withMessage('Email is required')
            .isEmail().withMessage('Invalid email address')
            .custom((value) => {
                if (isDisposableEmail(value)) {
                    throw new Error('Disposable email addresses are not allowed');
                }
                return true;
            })
            .normalizeEmail(),
        body('phone').optional().trim().escape(),
        body('subject').optional().trim().escape(),
        body('message').trim().notEmpty().withMessage('Message is required').isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters').escape(),
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = {};
    errors.array().map(err => extractedErrors[err.path] = err.msg);
    
    return res.status(422).json({
        errors: extractedErrors,
    });
};

module.exports = {
    contactValidationRules,
    validate,
};
