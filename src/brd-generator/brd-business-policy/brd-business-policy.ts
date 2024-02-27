import fs from 'fs';
import path from 'path';
import { client, generateMessage } from '../../openai/openai';

async function generateBusinessPolicies(projectBrief: string): Promise<string> {
  const projectRoot = process.cwd();
  const fileName = 'brd-business-policy.prompt.txt';
  const filePath = path.join(projectRoot, '/src/brd-generator', 'brd-business-policy', fileName);

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
    console.error('Error generating document information page:', err);
    throw err; // Allow the error to propagate upwards
  }
}

export { generateBusinessPolicies };
