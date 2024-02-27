import { generateContentFromPromptFile } from '../brd-utils/brd-utils';

async function generateRequirementsPage(projectBrief: string): Promise<string> {
  return generateContentFromPromptFile(
    projectBrief,
    'brd-requirements',
    'brd-requirements.prompt.txt'
  );
}

export { generateRequirementsPage };
