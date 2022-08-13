const dotenv = require("dotenv")
const express = require('express');

// grab sensitive data from .env file
dotenv.config()

// instantiate express app
const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
  res.send('Express is set up!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});