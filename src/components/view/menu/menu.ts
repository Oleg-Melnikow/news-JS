import { menuVisibility } from 'helpers/menuVisibility';
import { MenuClass, Control } from 'interfaces/index';
import Controls from '../controls/controls';
import './menu.css';

class Menu implements MenuClass {
  controls: Control;

  constructor() {
    this.controls = new Controls();
  }

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

  public drawControls(): void {
    this.controls.draw();
  }
}

export default Menu;
