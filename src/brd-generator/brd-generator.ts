import { generateTitlePage } from './brd-title-page/brd-title-page';

class BRDGenerator {
  static async generate(projectBrief: string) {
    return await generateTitlePage(projectBrief);
  }
}

export default BRDGenerator;
