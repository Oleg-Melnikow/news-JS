import { Control } from 'interfaces/index';
import { category } from 'helpers/staticData';
import './controls.css';

class Controls implements Control {
  public draw(): void {
    const selectBlock = document.getElementById('category') as HTMLSelectElement | null;

    if (!selectBlock) {
      return;
    }

    selectBlock.innerHTML = '';

    category.forEach((el) => {
      const item = document.createElement('option');
      item.value = el;
      item.textContent = el;

      if (el === 'all') {
        item.selected = true;
      }

      selectBlock.append(item);
    });
  }
}

export default Controls;
