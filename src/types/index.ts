type Status = 'ok' | 'error';
type Callback<T = void> = (params: T) => void;
type Params = { endpoint: string; options?: RequestOptions };
type Target = Element | EventTarget | null;

type RequestOptions = {
  [key: string]: string;
};

enum StatusError {
  Unauthorized = 401,
  NotFound = 404,
}

interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: Pick<Source, 'id' | 'name'>;
}

interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface NewsClass {
  draw(data: Article[]): void;
}

interface SourceClass {
  draw(data: Source[]): void;
}

interface MenuClass {
  draw(): void;
}

interface AppViewClass {
  news: NewsClass;
  sources: SourceClass;
  menu: MenuClass;
  drawNews(data: ResponseNews): void;
  drawSources(data: ResponseSources): void;
  drawMenu(): void;
}

interface LoaderClass {
  readonly baseLink: string;
  readonly options: RequestOptions;
  getResp<T>(params: Params, callback?: Callback<T>): void;
}

interface ResponseItems {
  status: Status;
  sources: Source[];
  totalResults: number;
  articles: Article[];
}

type ResponseSources = Omit<ResponseItems, 'articles' | 'totalResults'>;
type ResponseNews = Omit<ResponseItems, 'sources'>;

export {
  Article,
  NewsClass,
  Source,
  SourceClass,
  AppViewClass,
  ResponseSources,
  ResponseNews,
  LoaderClass,
  Callback,
  RequestOptions,
  Params,
  StatusError,
  Target,
  MenuClass,
};
