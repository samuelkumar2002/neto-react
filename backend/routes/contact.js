const express = require('express');
const router = express.Router();
const db = require('../database');
const { contactValidationRules, validate } = require('../middleware/validation');
const { verifyCaptcha } = require('../middleware/captcha');
const { checkDuplicateSubmission } = require('../middleware/duplicateCheck');

router.post('/', contactValidationRules(), validate, verifyCaptcha, checkDuplicateSubmission, (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;

    const stmt = db.prepare(`
        INSERT INTO contact_submissions (name, email, phone, subject, message, ip_address)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

    stmt.run([name, email, phone, subject, message, ipAddress], function(err) {
        if (err) {
            console.error('Error saving submission:', err);
            return res.status(500).json({ error: 'Failed to save submission.' });
        }
        res.status(201).json({ success: true, message: 'Message sent successfully!', id: this.lastID });
    });
    stmt.finalize();
});

module.exports = router;
