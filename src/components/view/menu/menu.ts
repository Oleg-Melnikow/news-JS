import { menuVisibility } from 'helpers/menuVisibility';
import { MenuClass } from 'interfaces/index';

import './menu.css';

class Menu implements MenuClass {
  public draw(): void {
    const menu = document.querySelector<HTMLElement>('#menu');
    const openMenuBtn = document.querySelector<HTMLElement>('#burger-menu');

    if (!menu) {
      return;
    }

    menu.addEventListener('click', () => {
      menuVisibility(false);
    });

    if (openMenuBtn) {
      openMenuBtn.addEventListener('click', () => {
        menuVisibility(true);
      });
    }
  }
}

export default Menu;
