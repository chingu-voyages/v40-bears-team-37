// grab sensitive information from .env file
require('dotenv').config();

import express, { Express, Request, Response } from 'express';

// instantiate express app
const app: Express = express();
const port = process.env.PORT || 4000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Express and Typescript working! Welcome to Notum backend!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});