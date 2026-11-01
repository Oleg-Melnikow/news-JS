interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface SourceClass {
  draw(data: Source[]): void;
}

export { Source, SourceClass };
