const posts = require('../posts');
const layout = require('../body');

function get(request, response) {
  let items = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(posts)) {
    items += `<li>
                <div class="center box">
                  <h2>${posts[key].name || 'Anonymous'} </h2>
                  <p> ${posts[key].post}</p>
                  <form action="/delete-post" method="POST"  class="delete">
                    <button name="delete" value='${key}' aria-label="Delete ${
      posts[key].post
    }">
                    🗑️ Delete
                    </button>
                  </form>
                  </div>
                </li>`;
  }
  const body = `

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
      `;
  const html = layout.htmlpopulate('Shortly', body);
  response.send(html);
}

module.exports = { get };
