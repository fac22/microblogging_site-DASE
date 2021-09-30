const posts = require('../posts');

function get(request, response) {
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
}

let idArr = [];
let id = 0;

function post(request, response) {
  const newPost = request.body;
  if (newPost.post.length > 50) {
    response.redirect('/add-post/error');
  } else {
    idArr = Object.keys(posts);
    // eslint-disable-next-line radix
    const idArrInt = idArr.map((el) => parseInt(el));
    let bigId = idArrInt.reduce((acc, cur) => (acc > cur ? acc : cur), 0);

    id = bigId + 1;
    posts[id] = newPost;
    response.redirect('/');
  }
}

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

module.exports = { get, post, error };
