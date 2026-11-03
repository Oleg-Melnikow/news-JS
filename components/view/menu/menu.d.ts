import { MenuClass, Control } from 'interfaces/index';
import './menu.css';
declare class Menu implements MenuClass {
    controls: Control;
    constructor();
    draw(): void;
    drawControls(): void;
}
export default Menu;
//# sourceMappingURL=menu.d.ts.map