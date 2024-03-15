import { addPageBreaktoMarkdown } from '../doc-utils/doc-utils';
import { generateDocumentInformation } from './brd-document-information/brd-document-information';
import { generateRequirementsPage } from './brd-requirements/brd-requirements';
import { generateTitlePage } from './brd-title-page/brd-title-page';
import { generateBusinessPolicies } from './brd-business-policy/brd-business-policy';
import { generateOverviewPage } from './brd-project-overview/brd-project-overview';
import { generateUserStories } from './brd-user-stories/brd-user-stories';

class BRDGenerator {
  static async generate(projectBrief: any, updateStatus: (status: string) => void) {
    const contentGenerationTasks = [
      generateTitlePage,
      generateDocumentInformation,
      generateRequirementsPage,
      generateBusinessPolicies,
      // generateOverviewPage,
      generateUserStories,
    ];

    const totalTasks = contentGenerationTasks.length;
    let completedTasks = 0;

    const formattedContent = await Promise.all(
      contentGenerationTasks.map(async (task) => {
        const content = await task(projectBrief);
        completedTasks++;
        // Calculate completion percentage and send status update
        const percentComplete = Math.round((completedTasks / totalTasks) * 100);
        updateStatus(`Processing... ${percentComplete}% complete`);
        return addPageBreaktoMarkdown(content);
      })
    );

    const finalDocument = formattedContent.join('');
    console.log(finalDocument);
    return finalDocument;
  }
}
export default BRDGenerator;
