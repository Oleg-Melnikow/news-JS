import { LoaderClass, Callback, RequestOptions, Params, StatusError } from 'interfaces/index';

class Loader implements LoaderClass {
  readonly baseLink: string;
  readonly options: RequestOptions;

  constructor(baseLink: string, options: RequestOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp<T>(
    { endpoint, options = {} }: Params,
    callback: Callback<T> = (): void => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === StatusError.Unauthorized || res.status === StatusError.NotFound)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: RequestOptions, endpoint: string): string {
    const urlOptions: Record<string, string> = { ...this.options, ...options };

    // Используем современный URLSearchParams вместо ручной склейки строк
    const searchParams = new URLSearchParams(urlOptions);

    return `${this.baseLink}${endpoint}?${searchParams.toString()}`;
  }

  private load<T>(
    method: string,
    endpoint: string,
    callback: Callback<T>,
    options: RequestOptions = {}
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((res) => this.errorHandler(res))
      .then((res) => res.json())
      .then((data: T) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
