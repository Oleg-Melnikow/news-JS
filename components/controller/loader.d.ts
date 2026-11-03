import { LoaderClass, Callback, RequestOptions, Params } from 'interfaces/index';
declare class Loader implements LoaderClass {
    readonly baseLink: string;
    readonly options: RequestOptions;
    constructor(baseLink: string, options: RequestOptions);
    getResp<T>({ endpoint, options }: Params, callback?: Callback<T>): void;
    private errorHandler;
    private makeUrl;
    private load;
}
export default Loader;
//# sourceMappingURL=loader.d.ts.map