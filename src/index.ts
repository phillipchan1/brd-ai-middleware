import express, { Request, Response } from 'express';
import multer from 'multer';
import BRDGenerator from './brd-generator/brd-generator';
import path = require('path');
import fs from 'fs';
import { client, generateMessage } from './openai/openai';

import { Server as SocketIOServer } from 'socket.io';
import { createServer } from 'http';

const app = express();
const port = process.env.PORT || 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const port = process.env.PORT || 8000;
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: 'http://localhost:3000', // Client URL
    methods: ['GET', 'POST'],
  },
});


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

    res.setHeader('Content-Disposition', 'attachment; filename=brd.md');
    res.setHeader('Content-Type', 'text/markdown');

    res.send(brd);
  } catch (error) {
    console.error('Error generating BRD:', error);
    res.status(500).send('Error generating BRD');
  }
});

io.on(
  'connection',
  (socket: {
    on: (arg0: string, arg1: (projectBrief: any) => Promise<void>) => void;
    emit: (arg0: string, arg1: string) => void;
  }) => {
    console.log('a user connected');
    socket.on('generateBRD', async (projectBrief) => {
      try {
        console.log('starting BRD');
        const brd = await BRDGenerator.generate(JSON.stringify(projectBrief), (status: string) => {
          socket.emit('statusUpdate', status);
        });
        console.log('This is BRD:', brd);
        socket.emit('brdGenerated', brd);
      } catch (error) {
        console.error('Error generating BRD:', error);
        socket.emit('brdError', 'Error generating BRD');
      }
    });
  }
);

httpServer.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
