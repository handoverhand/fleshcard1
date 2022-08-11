const React = require('react');

function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" />
        <script defer src="/js/client.js" />
        <meta charSet="UTF-8" />
        <title>Document</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
module.exports = Layout;
