const express = require('express');

const posts = require('./posts');

const server = express();

const functions = require('./routes/functions');

// let html = '';

server.get('/', (request, response) => {
  let items = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const post of Object.values(posts)) {
    items += `<li>
              <div class="center box">
                <h2>${post.name} </h2>
                <p> ${post.post}</p>
                <form action="/delete-post" method="POST"  class="delete">
                  <button name="name" value="${post.name}" aria-label="Delete ${post.name}">
                  🗑️ Delete
                  </button>
                </form>
                </div>
              </li>`;
  }
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
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon">

        <title>Shortlr</title>
      </head>
      <body>
      <header>
        <h1>Posts!</h1>
      </header> 
      <main>
      <div class="center box">
        <ul>${items}</ul>
        <h2>
        <a href="/add-post">Add your post +</a>
        </h2>
        </form>
        </div>
        </main>
      </body>
    </html>
    `;
  response.send(html);
});

server.get('/add-post', (request, response) => {
  const html = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap"
      rel="stylesheet">
      <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/assets/favicon.ico" type="image/x-icon">

    <title>Shortlr</title>
        </head>
        <body>
        <header>
          <h1>Add your post</h1>
         </header>
         <main>
         <div class="center box"> 
          <form method="POST">
            <label for="name"><h2>Your name</h2></label>
            <input id="name" name="name">
            <label for="post"><h2>Your post</h2> </label>
            <input id="post" name="post">
            <button>Add</button>
          </form>
          </div>
          </main>
        </body>
      </html>
      `;
  response.send(html);
});

server.get('/add-post/error', functions.error);

const bodyParser = express.urlencoded({ extended: false });

server.post('/add-post', bodyParser, (request, response) => {
  const newPost = request.body;
  if (newPost.post.length > 50) {
    response.redirect('/add-post/error');
  } else {
    const name = newPost.name.toLowerCase();
    posts[name] = newPost;
    response.redirect('/');
  }
});

server.post('/delete-post', bodyParser, (request, response) => {
  const postToDelete = request.body.name.toLowerCase();
  delete posts[postToDelete];
  response.redirect('/');
});

const staticHandler = express.static('public');
server.use(staticHandler);

const PORT = 3000;
// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
