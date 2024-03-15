import { addPageBreaktoMarkdown } from '../doc-utils/doc-utils';
import { generateDocumentInformation } from './brd-document-information/brd-document-information';
import { generateRequirementsPage } from './brd-requirements/brd-requirements';
import { generateTitlePage } from './brd-title-page/brd-title-page';
import { generateBusinessPolicies } from './brd-business-policy/brd-business-policy';
import { generateOverviewPage } from './brd-project-overview/brd-project-overview';
import { generateUserStories } from './brd-user-stories/brd-user-stories';

class BRDGenerator {
  static async generate(projectBrief: any) {
    const contentGenerationPromises = [
      generateTitlePage(projectBrief),
      generateDocumentInformation(projectBrief),
      generateRequirementsPage(projectBrief),
      generateBusinessPolicies(projectBrief),
      // generateOverviewPage(projectBrief),
      generateUserStories(projectBrief),
    ];

    const formattedContent = await Promise.all(
      contentGenerationPromises.map(async (promise) => {
        const content = await promise;
        return addPageBreaktoMarkdown(content);
      })
    );

    const finalDocument = formattedContent.join('');

    console.log(finalDocument);
    return finalDocument;
  }
}

export default BRDGenerator;
