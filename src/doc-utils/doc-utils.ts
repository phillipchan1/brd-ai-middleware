function addPageBreaktoMarkdown(markdown: string): string {
  return markdown.concat('\n\n---\n\n');
}

export { addPageBreaktoMarkdown };
