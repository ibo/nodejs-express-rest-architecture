class Middleware {
    before(req, res, next) {
        next();
    }
};

module.exports = new Middleware();