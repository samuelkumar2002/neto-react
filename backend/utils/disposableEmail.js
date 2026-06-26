const disposableDomains = new Set([
    'mailinator.com', '10minutemail.com', 'guerrillamail.com', 'yopmail.com', 'tempmail.com', 'trashmail.com'
]);

function isDisposableEmail(email) {
    const domain = email.split('@')[1];
    if (!domain) return false;
    return disposableDomains.has(domain.toLowerCase());
}

module.exports = { isDisposableEmail };
