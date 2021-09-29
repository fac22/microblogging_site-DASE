// const posts = require('../posts.js');

function error(request, response) {
  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    <body>
      <h1>Submission error</h1>
      <span> That is way too long, no-one wants to read that </span>
      <a href="/add-post">back</a>
    </body>
  </html>
  `;
  response.end(html);
}

module.exports = { error };
