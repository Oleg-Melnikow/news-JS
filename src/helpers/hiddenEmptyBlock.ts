export function hiddenEmptyBlock(isVisible: boolean, text?: string, news?: HTMLElement): void {
  const emptyBlock = document.querySelector<HTMLElement>('.empty');

  if (!emptyBlock) {
    return;
  }

  emptyBlock.style.display = isVisible ? 'flex' : 'none';
  emptyBlock.textContent = text || 'List news is empty. Please open menu and choose sources';

  if (news) {
    news.style.display = isVisible ? 'none' : 'flex';
  }
}
