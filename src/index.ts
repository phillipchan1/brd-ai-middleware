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
  const projectBrief = req.body.projectBrief;

  try {
    const brd = await BRDGenerator.generate(JSON.stringify(projectBrief));
    console.log('This is BRD:', brd);

    // Set headers for file download
    res.setHeader('Content-Disposition', 'attachment; filename=brd.md');
    res.setHeader('Content-Type', 'text/markdown');

    // Send the Markdown content as the response
    res.send(brd);
  } catch (error) {
    console.error('Error generating BRD:', error);
    res.status(500).send('Error generating BRD');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
