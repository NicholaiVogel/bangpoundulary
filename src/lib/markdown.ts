export function inlineMarkdown(input = ''): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

export function markdownBlocks(input = ''): string {
  const lines = input.split('\n');
  const out: string[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) {
      out.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
      list = [];
    }
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    if (line.startsWith('```')) { continue; }
    if (line.startsWith('- ')) { list.push(line.slice(2)); continue; }
    flush();
    out.push(`<p>${inlineMarkdown(line)}</p>`);
  }
  flush();
  return out.join('\n');
}
