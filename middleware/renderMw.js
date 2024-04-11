/**
 * Kirendereli az oldalt
 */

const requireOption = require('./requireOption');

module.exports = function (objectreposity, viewName) {
    return function (req, res) {
        //console.log('Render: ' + viewName);
        //res.end('Template: ' + viewName);
        res.render(viewName, res.locals);
    };
};