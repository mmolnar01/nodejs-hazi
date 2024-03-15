/**
 * Kirendereli az oldalt
 */

module.exports = function (objectreposity, viewName) {
    return function (req, res) {
        res.end('Render: ' + viewName);
        //res.render(viewName, res.tpl);
    };
};