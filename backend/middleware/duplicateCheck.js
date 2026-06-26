const db = require('../database');

function checkDuplicateSubmission(req, res, next) {
    const ip = req.ip || req.connection.remoteAddress;
    const email = req.body.email;
    
    const query = `
        SELECT id FROM contact_submissions 
        WHERE (ip_address = ? OR email = ?) 
        AND submitted_at >= datetime('now', '-1 day')
        LIMIT 1
    `;
    
    db.get(query, [ip, email], (err, row) => {
        if (err) {
            console.error('Database error in duplicate check:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (row) {
            return res.status(429).json({ error: 'You have already submitted a message recently.' });
        }
        next();
    });
}

module.exports = { checkDuplicateSubmission };
