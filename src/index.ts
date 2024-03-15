import express, { Request, Response } from 'express';
import multer from 'multer';
import BRDGenerator from './brd-generator/brd-generator';
import path = require('path');
import fs from 'fs';
import { client, generateMessage } from './openai/openai';

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
  const projectBrief: string = fileContent.toString();

  try {
    const filePath = path.join(process.cwd(), '/src/generate-requirements', 'generate-requirements.prompt.txt');

    const fileData = await fs.promises.readFile(filePath, 'utf-8');
    const unpopulatedPrompt = fileData;
    const populatedPrompt = unpopulatedPrompt.concat(projectBrief);
    const prompt = generateMessage(populatedPrompt);

    const chatCompletion = await client.chat.completions.create({
      messages: [prompt],
      model: 'gpt-4-32k',
    });

    const messageContent = chatCompletion.choices[0].message.content;

    const projectBriefJSON = messageContent ? JSON.parse(messageContent) : {};

    if (!projectBriefJSON['Octane Link']) {
      projectBriefJSON['Octane Link'] = '';
    }

    res.status(200).json({ projectBrief: projectBriefJSON });
  } catch (error) {
    console.error('There was an error generating the project brief:', error);
    res.status(500).send('There was an error generating the project brief.');
  }
});


app.post('/brd', async (req: Request, res: Response) => {
  const projectBrief = req.body.projectBrief;

  try {
    const brd = await BRDGenerator.generate(projectBrief);
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
  console.log(`\nApplication listening on port ${port}.`);
});
