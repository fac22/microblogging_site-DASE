const express = require('express');

const server = express();

const staticHandler = express.static('public');
server.use(staticHandler);

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
