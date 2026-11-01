interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    id: string;
    name: string;
  };
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

export { Article, NewsClass, Source, SourceClass };
