const express = require('express');

const app = express();
const port = 3002;

app.get('/health-check', (req, res) => {
  res.send('API2 is healthy!');
});

app.listen(port, () => {
  console.log(`API2 listening at http://localhost:${port}`);
});
