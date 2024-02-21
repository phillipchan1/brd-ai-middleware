import express, { Request, Response } from 'express';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/brd', async (req: Request, res: Response) => {
  const prompt = req.body.prompt;
  console.log(prompt);
  res.json({ message: prompt });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
