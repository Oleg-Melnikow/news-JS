import {
  NewsClass,
  SourceClass,
  ResponseSources,
  ResponseNews,
  AppViewClass,
  MenuClass,
} from 'interfaces/index';
import News from './news/news';
import Sources from './sources/sources';
import Menu from './menu/menu';

export class AppView implements AppViewClass {
  readonly news: NewsClass;
  readonly sources: SourceClass;
  readonly menu: MenuClass;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.menu = new Menu();
  }

  public drawNews(data: ResponseNews): void {
    const values = data?.articles ?? [];
    this.news.draw(values);
  }

  public drawSources(data: ResponseSources): void {
    const values = data?.sources ?? [];
    this.sources.draw(values);
  }

  public drawMenu(): void {
    this.menu.draw();
    this.menu.drawControls();
  }
}

export default AppView;
