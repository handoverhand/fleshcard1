const React = require('react');

function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/client.js" />
        <meta charset="UTF-8" />
        <title>Document</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
module.exports = Layout;
