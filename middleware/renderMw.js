/**
 * Kirendereli az oldalt
 */

module.exports = function (objectreposity, viewName) {
    return function (req, res) {
        console.log('Render: ' + viewName);
        res.end('Template: ' + viewName);
        //res.render(viewName, res.tpl);
    };
};