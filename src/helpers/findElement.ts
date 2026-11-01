export function findElement(parent: ParentNode, selector: string): HTMLElement {
  const element: HTMLElement | null = parent.querySelector(selector);
  if (!element) {
    throw new Error('Element not found!');
  }
  return element;
}
