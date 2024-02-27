import { addPageBreaktoMarkdown } from '../doc-utils/doc-utils';
import { generateDocumentInformation } from './brd-document-information/brd-document-information';
import { generateRequirementsPage } from './brd-requirements/brd-requirements';
import { generateTitlePage } from './brd-title-page/brd-title-page';
import { generateBusinessPolicies } from './brd-business-policy/brd-business-policy';

class BRDGenerator {
  static async generate(projectBrief: any) {
    // Create an array of promises representing each task
    const promises = [
      generateTitlePage(projectBrief),
      generateDocumentInformation(projectBrief),
      generateRequirementsPage(projectBrief),
      generateBusinessPolicies(projectBrief),
    ];

    // Wait for all promises to resolve concurrently
    const [titlePage, documentInformation, requirements, businessPolicies] = await Promise.all(
      promises
    );

    // Apply formatting and construct final document
    const formattedTitlePage = addPageBreaktoMarkdown(titlePage);
    console.log('title page done', formattedTitlePage);

    const formattedDocumentInformation = addPageBreaktoMarkdown(documentInformation);
    console.log('document information done', formattedDocumentInformation);

    const formattedRequirements = addPageBreaktoMarkdown(requirements);
    console.log('requirements done', formattedRequirements); // Assume you want a log here

    const formattedBusinessPolicies = addPageBreaktoMarkdown(businessPolicies);
    console.log('business policies done', formattedBusinessPolicies);

    const finalDocument = [
      formattedTitlePage,
      formattedDocumentInformation,
      formattedRequirements,
      formattedBusinessPolicies,
    ].join(''); // Assemble the final document

    console.log(finalDocument);
    return finalDocument;
  }
}

export default BRDGenerator;
