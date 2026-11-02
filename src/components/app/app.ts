import { ResponseSources, ResponseNews } from 'interfaces/index';
import { menuVisibility } from 'helpers/menuVisibility';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private readonly controller: AppController;
  private readonly view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    const sources = document.querySelector('.sources');
    const category = document.getElementById('category');

    if (sources) {
      sources.addEventListener('click', (e: Event) =>
        this.controller.getNews(e, (data: ResponseNews) => {
          this.view.drawNews(data);
          menuVisibility(false);
        })
      );
    }
    this.controller.getSources((data: ResponseSources) => {
      this.view.drawSources(data);
      this.view.drawMenu();
    });
    if (category) {
      category.addEventListener('change', (e: Event) => {
        this.controller.getSources((data: ResponseSources) => {
          this.view.drawSources(data);
        }, e);
      });
    }
  }
}

export default App;
