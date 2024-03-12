// index.ts
import express, { Request, Response } from 'express';
import BRDGenerator from './brd-generator/brd-generator';
import fileUpload from 'express-fileupload';
import { sendToChatGPT } from './generate-requirements/generate-requirements';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Input(s): Plain Text Body
// Output: Project Brief (JSON Format)
app.post('/brd', async (req: Request, res: Response) => {
  try {
    // Check if textFile exists in the request body
    if (!req.files || !req.files.textFile) {
      res.status(400).send('No text file uploaded');
      return;
    }

    // Assuming textFile is a text file
    const plainTextBody = req.files.textFile.data.toString('utf-8');

    // 2. Write the ChatGPT Prompt, will need to test on GPT myself first.
    const chatGptPrompt = `Your ChatGPT prompt here. ${plainTextBody}`;

    // 3. Send the prompt along with the text file.
    const chatGptResponse = await sendToChatGPT(chatGptPrompt);

    // 4. Handle the response from ChatGPT.
    // 4a. Validate that it is in JSON.
    let projectBrief;
    try {
      projectBrief = JSON.parse(chatGptResponse);
    } catch (jsonError) {
      console.error('Error parsing ChatGPT response:', jsonError);
      res.status(500).send('Error parsing ChatGPT response');
      return;
    }

    // 5. Return the JSON to the client.
    res.json(projectBrief);
  } catch (error) {
    console.error('Error processing BRD request:', error);
    res.status(500).send('Error processing BRD request');
  }
});

// Handle file download
app.post('/brd/download', async (req: Request, res: Response) => {
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
