/**
 * Kirendereli az oldalt
 */

module.exports = function (objectreposity) {
    return function (req, res, next) {
        return next();
    };
};