import { generateContentFromPromptFile } from '../brd-utils/brd-utils';

async function generateBusinessPolicies(projectBrief: string): Promise<string> {
  return generateContentFromPromptFile(
    projectBrief,
    'brd-business-policy',
    'brd-business-policy.prompt.txt'
  );
}

export { generateBusinessPolicies };
