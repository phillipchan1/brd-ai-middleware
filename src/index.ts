import express, { Request, Response } from 'express';
import multer from 'multer';
import BRDGenerator from './brd-generator/brd-generator';
import { generateContentFromPromptFile } from './brd-generator/brd-utils/brd-utils';

const app = express();
const port = process.env.PORT || 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/generate-requirements', upload.single('textFile'), async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('There was no file uploaded.');
  }

  const fileContent: Buffer = req.file.buffer;

  console.log('\nYou\'ve received the text file:\n\n', fileContent.toString());

  res.status(200).send('You\'ve uploaded the file successfully.');
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