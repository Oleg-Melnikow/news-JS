import {
  NewsClass,
  SourceClass,
  ResponseSources,
  ResponseNews,
  AppViewClass,
} from 'interfaces/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView implements AppViewClass {
  readonly news: NewsClass;
  readonly sources: SourceClass;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: ResponseNews): void {
    const values = data?.articles ?? [];
    this.news.draw(values);
  }

  public drawSources(data: ResponseSources): void {
    const values = data?.sources ?? [];
    this.sources.draw(values);
  }
}

export default AppView;
