// const posts = require('../posts.js');

function error(request, response) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap"
          rel="stylesheet">
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" href="/favicon.ico" type="image/x-icon">
      <title>Error</title>
    </head>
    <body>
    <header>
      <h1>Submission error</h1>
    </header>
    <div class="banner">
      <h2> That is way too long, no-one wants to read that </h2>
      <h3> <a href="/add-post">I'll be better, take me back</a> </h3>
      </div>
    </body>
  </html>
  `;
  response.send(html);
}

module.exports = { error };
