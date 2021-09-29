const express = require('express');

const posts = require('./posts');

const server = express();

server.get('/', (request, response) => {
  let items = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const post of Object.values(posts)) {
    items += `<li>${post.name} : ${post.post}</li>`;
  }
  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Microblogging site!</title>
      </head>
      <body>
        <h1>Posts!</h1>
        <ul>${items}</ul>
        <a href="/add-post">Add your post +</a>
        </form>
      </body>
    </html>
    `;
  response.send(html);
});

server.get('/add-post', (request, response) => {
  const html = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Microblogging site!</title>
        </head>
        <body>
          <h1>Add your post</h1>
          <form method="POST">
            <label id="name">Your name</label>
            <input id="name" name="name">
            <label id="post">Your post</label>
            <input id="post" name="post">
            <button>Add</button>
          </form>
        </body>
      </html>
      `;
  response.send(html);
});

const bodyParser = express.urlencoded({ extended: false });

server.post('/add-post', bodyParser, (request, response) => {
  const newPost = request.body;
  const name = newPost.name.toLowerCase();
  posts[name] = newPost;
  response.redirect('/');
});

const staticHandler = express.static('public');
server.use(staticHandler);

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
