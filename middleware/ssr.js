const ReactDOMServer = require('react-dom/server');
const React = require('react');

function renderComponent(reactComponent, props = {}, options = { doctype: true }) {
  const reactElement = React.createElement(reactComponent, {
    ...this.app.locals, 
    ...this.locals, 
    ...props, 
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  if (options.doctype) {
    this.write('<!doctype html>');
  }
  this.end(html);
}
function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}
module.exports = ssr;