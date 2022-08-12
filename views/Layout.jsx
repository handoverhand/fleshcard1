const React = require('react');
const Navbar = require('./Navbar');

function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" />
        <script defer src="/js/client.js" />
        <meta charSet="UTF-8" />
        <title>FlashCards</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
module.exports = Layout;
