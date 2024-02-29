process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import fs from 'fs';
import path from 'path';
import { client, generateMessage } from '../../openai/openai';

async function generateContentFromPromptFile(
  projectBrief: string,
  directory: string,
  fileName: string
): Promise<string> {
  const projectRoot = process.cwd();
  const filePath = path.join(projectRoot, '/src/brd-generator', directory, fileName);

  try {
    const fileData = await fs.promises.readFile(filePath, 'utf-8');
    const unpopulatedPrompt = fileData;
    const populatedPrompt = unpopulatedPrompt.concat(projectBrief);
    const prompt = generateMessage(populatedPrompt);

    const chatCompletion = await client.chat.completions.create({
      messages: [prompt],
      model: 'gpt-4-32k',
    });

    const messageContent = chatCompletion.choices[0].message.content;
    return messageContent !== null ? messageContent : '';
  } catch (err) {
    console.error(`Error generating content from ${fileName}:`, err);
    throw err; // Allow the error to propagate upwards
  }
}

export { generateContentFromPromptFile };
