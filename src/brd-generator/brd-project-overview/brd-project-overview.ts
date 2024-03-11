import { generateContentFromPromptFile } from '../brd-utils/brd-utils';

async function generateOverviewPage(projectBrief: string): Promise<string> {
  return generateContentFromPromptFile(projectBrief, 'brd-project-overview', 'brd-project-overview.prompt.txt');
}

export { generateOverviewPage };
