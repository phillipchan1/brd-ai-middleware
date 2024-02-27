import { generateContentFromPromptFile } from '../brd-utils/brd-utils';

async function generateDocumentInformation(projectBrief: string): Promise<string> {
  return generateContentFromPromptFile(
    projectBrief,
    'brd-document-information',
    'brd-document-information.prompt.txt'
  );
}

export { generateDocumentInformation };
