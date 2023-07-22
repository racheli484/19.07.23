const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/health-check', async (req, res) => {
  try {
    const response = await axios.get('http://api2:3002/health-check');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error communicating with API2');
  }
});

app.listen(port, () => {
  console.log(`API1 listening at http://localhost:${port}`);
});
