function authenticate(req, res, next) {

    if (!authenticated) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    next();
}

module.exports = {
    authenticate,
};