import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

//parsers

app.use(express.json());
app.use(cors() as any);

app.get('/', (req: Request, res: Response) => {
  res.send("Hello from Tanvir's server");
});

export default app;
