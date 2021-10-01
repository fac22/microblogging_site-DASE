const posts = require('../posts');
const layout = require('../body');

function get(request, response) {
  let items = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(posts)) {
    items += html`<li>
      <div class="center box">
        <h2>${posts[key].name || 'Anonymous'}</h2>
        <p>${posts[key].post}</p>
        <form action="/delete-post" method="POST" class="delete">
          <button
            name="delete"
            value="${key}"
            aria-label="Delete ${posts[key].post}"
          >
            🗑️ Delete
          </button>
        </form>
      </div>
    </li>`;
  }
  const body = html`
        <header>
          <h1>Posts!</h1>
        </header> 
        <main>
        <div class="center box">
        <h2>
        <a href="/add-post">Add your post +</a>
        </h2>
          <ul>${items}</ul>
          </form>
          </div>
          </main>
      `;
  const html = layout.htmlpopulate('Shortlr', body);
  response.send(html);
}

module.exports = { get };
