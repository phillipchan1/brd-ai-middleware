import express, { Request, Response } from 'express';
import BRDGenerator from './brd-generator/brd-generator';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/brd', async (req: Request, res: Response) => {
  const prompt = req.body.prompt;
  console.log(prompt);

  const brd = await BRDGenerator.generate(prompt);
  res.json({ message: brd });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
