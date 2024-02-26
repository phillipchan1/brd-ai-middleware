import { addPageBreaktoMarkdown } from '../doc-utils/doc-utils';
import { generateDocumentInformation } from './brd-document-information/brd-document-information';
import { generateRequirementsPage } from './brd-requirements/brd-requirements';
import { generateTitlePage } from './brd-title-page/brd-title-page';

class BRDGenerator {
  static async generate(projectBrief: any) {
    // title page
    // var titlePage = await generateTitlePage(projectBrief);
    // titlePage = addPageBreaktoMarkdown(titlePage);
    // console.log('title page done', titlePage);

    // document information page
    // var documentInformation = await generateDocumentInformation(projectBrief);
    // documentInformation = addPageBreaktoMarkdown(documentInformation);
    // console.log('document information done', documentInformation);

    var requirements = await generateRequirementsPage(projectBrief);
    requirements = addPageBreaktoMarkdown(requirements);
    console.log('requirements done', requirements);

    var finalDocument = requirements;

    console.log(finalDocument);

    return finalDocument;
  }
}

export default BRDGenerator;
