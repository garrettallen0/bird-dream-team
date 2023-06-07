const express = require('express');
const app = express();
const path = require('path');

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, './src/index.html'));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
