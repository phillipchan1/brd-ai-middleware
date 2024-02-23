import { addPageBreaktoMarkdown } from '../doc-utils/doc-utils';
import { generateDocumentInformation } from './brd-document-information/brd-document-information';
import { generateTitlePage } from './brd-title-page/brd-title-page';

class BRDGenerator {
  static async generate(projectBrief: any) {
    console.log(projectBrief);
    const titlePage = await generateTitlePage(projectBrief);
    console.log('title page done', titlePage);

    const documentInformation = await generateDocumentInformation(projectBrief);
    console.log('document information done', documentInformation);

    var finalDocument = addPageBreaktoMarkdown(titlePage);
    finalDocument = finalDocument.concat(documentInformation);

    console.log(finalDocument);

    return finalDocument;
  }
}

export default BRDGenerator;
