const posts = require('../posts');
const layout = require('../body');

function get(request, response) {
  const html = /* html */ `
    <header>
      <h1>Add your post</h1>
    </header>
    <main>
      <div class="center box">
        <form method="POST">
          <label for="name"><h2>Your name</h2></label>
          <input id="name" name="name" />
          <label for="post"><h2>Your post</h2> </label>
          <input id="post" name="post" required/>
          <button>Add</button>
        </form>
        <a href="/"> <h2> Take me back! <h2> </a>
      </div>
    </main>
  `;

  const page = layout.htmlpopulate('Shortlr', html);
  response.send(page);
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
    const bigId = idArrInt.reduce((acc, cur) => (acc > cur ? acc : cur), 0);

    id = bigId + 1;
    posts[id] = newPost;
    response.redirect('/');
  }
}

function error(request, response) {
  const html = html`
    <header>
      <h1>Submission error</h1>
    </header>
    <main>
    <div class="banner">

       <h2>That is way too long, no-one wants to read that</h2>
      <h3><a href="/add-post">I'll be better, take me back</a></h3>
    </div>
      </main>
  `;
  const page = layout.htmlpopulate('Error', html);
  response.send(page);
}

module.exports = { get, post, error };
