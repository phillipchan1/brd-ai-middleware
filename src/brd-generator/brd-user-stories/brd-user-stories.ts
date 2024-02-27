import { generateContentFromPromptFile } from '../brd-utils/brd-utils';

async function generateUserStories(projectBrief: string): Promise<string> {
  return generateContentFromPromptFile(
    projectBrief,
    'brd-user-stories',
    'brd-user-stories.prompt.txt'
  );
}

export { generateUserStories };
