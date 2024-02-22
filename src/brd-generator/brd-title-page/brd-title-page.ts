import fs from 'fs';
import path from 'path';
import { client, generateMessage } from '../../openai/openai';

async function generateTitlePage(projectBrief: string): Promise<string> {
  const projectRoot = process.cwd();
  const fileName = 'brd-title-page.prompt.txt';
  const filePath = path.join(projectRoot, '/src/brd-generator', 'brd-title-page', fileName);

  try {
    const fileData = await fs.promises.readFile(filePath, 'utf-8');

    const unpopulatedPrompt = fileData;
    const populatedPrompt = unpopulatedPrompt.concat(projectBrief);
    const prompt = generateMessage(populatedPrompt);

    const chatCompletion = await client.chat.completions.create({
      messages: [prompt],
      model: 'gpt-3.5-turbo',
    });

    const messageContent = chatCompletion.choices[0].message.content;
    return messageContent !== null ? messageContent : '';
  } catch (err) {
    console.error('Error generating title page:', err);
    throw err; // Allow the error to propagate upwards
  }
}

export { generateTitlePage };
