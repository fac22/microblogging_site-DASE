const express = require('express');
const home = require('./routes/home');
const addPost = require('./routes/addPost');
const deletePost = require('./routes/deletePost');

const server = express();

const bodyParser = express.urlencoded({ extended: false });

server.get('/', home.get);

server.get('/add-post', addPost.get);

server.get('/add-post/error', addPost.error);

server.post('/add-post', bodyParser, addPost.post);

server.post('/delete-post', bodyParser, deletePost.post);

const staticHandler = express.static('public');
server.use(staticHandler);

const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
