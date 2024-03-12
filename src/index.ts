// index.ts
import express, { Request, Response } from 'express';
import fileUpload, { UploadedFile } from 'express-fileupload'; // Import UploadedFile type
import BRDGenerator from './brd-generator/brd-generator';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Input(s): Plain Text Body
// Output: Project Brief (JSON Format)
app.post('/brd', async (req: Request, res: Response) => {
  /*
  
  1. Extract the text file from the body, and save it into a variable. May need to save it to a string.
    1a. If not a text file, return an error.
  2. Write the ChatGPT Prompt, will need to test on GPT myself first.
  3. Send the prompt along with the text file.
  4. Handle the response from ChatGPT.
    4a. Validate that it is in JSON.
  5. Return the JSON to the client.
 
  */
})

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
