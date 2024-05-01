const React = require('react');

function Layout({ title, children, user }) {
  return (
    <html lang='ru'>
      <head>
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
