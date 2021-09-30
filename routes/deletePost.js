const posts = require('../posts');

function post(request, response) {
  const postToDelete = request.body.delete;

  delete posts[postToDelete];
  response.redirect('/');
}

module.exports = { post };
