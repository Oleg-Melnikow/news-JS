export function menuVisibility(isVisible: boolean): void {
  const menu = document.querySelector<HTMLElement>('#menu');
  const drawer = document.querySelector<HTMLElement>('.drawer');
  const sources = document.querySelector<HTMLElement>('.sources');

  if (!menu || !drawer) {
    return;
  }

  menu.style.display = isVisible ? 'flex' : 'none';
  document.body.style.overflow = isVisible ? 'hidden' : '';

  drawer.classList.toggle('open', isVisible);

  if (!sources) {
    return;
  }
  sources.scrollTop = 0;
}
