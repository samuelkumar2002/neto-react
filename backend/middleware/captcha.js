const axios = require('axios');

async function verifyCaptcha(req, res, next) {
    const token = req.body.recaptchaToken;
    if (!token) {
        return res.status(400).json({ error: 'reCAPTCHA token is missing' });
    }

    try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        // Mock verification if secret key is dummy for dev environment
        if (secretKey === 'your_secret_key_here') {
            console.log('Skipping captcha verification (dummy key)');
            return next();
        }

        const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`);
        
        const data = response.data;
        if (data.success && data.score >= 0.5) {
            next();
        } else {
            return res.status(400).json({ error: 'reCAPTCHA verification failed' });
        }
    } catch (error) {
        console.error('reCAPTCHA Error:', error);
        return res.status(500).json({ error: 'Failed to verify reCAPTCHA' });
    }
}

module.exports = { verifyCaptcha };
