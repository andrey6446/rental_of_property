const React = require('react');
const NavBar = require('./NavBar');

function Layout({
  title, children, user, center,
}) {
  return (
    <html lang='ru'>
      <head>
        <title>{title}</title>
        <link rel='icon' type='image/x-icon' href='/images/favicon.png' />
        <script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js' />
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js' />
        <script defer src='/scripts/auth.js' />
        <script defer src='/scripts/script.js' />
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' />
        <link rel='stylesheet' href='/styles/style.css' />
      </head>
      <body>
        <NavBar user={user} />
        <div className={center ? 'container-xl vh-100 cont-center' : 'container-xl vh-100'}>{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
