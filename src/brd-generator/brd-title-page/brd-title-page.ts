import { generateContentFromPromptFile } from '../brd-utils/brd-utils';

async function generateTitlePage(projectBrief: string): Promise<string> {
  return generateContentFromPromptFile(projectBrief, 'brd-title-page', 'brd-title-page.prompt.txt');
}

export { generateTitlePage };
