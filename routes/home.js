const posts = require('../posts');

function get(request, response) {
  let items = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(posts)) {
    items += `<li>
                <div class="center box">
                  <h2>${posts[key].name} </h2>
                  <p> ${posts[key].post}</p>
                  <form action="/delete-post" method="POST"  class="delete">
                    <button name="delete" value='${key}' aria-label="Delete ${posts[key].post}">
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
}

module.exports = { get };
