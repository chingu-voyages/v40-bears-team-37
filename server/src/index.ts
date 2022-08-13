import express, { Express, Request, Response } from 'express';

// instantiate express app
const app: Express = express();
const port: number = 4000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Express and typescripasdfast is set asdfup!!!asasdfldkfjas! asd asdff');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});