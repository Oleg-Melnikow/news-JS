import { NewsClass, SourceClass, ResponseSources, ResponseNews, AppViewClass, MenuClass } from 'interfaces/index';
export declare class AppView implements AppViewClass {
    readonly news: NewsClass;
    readonly sources: SourceClass;
    readonly menu: MenuClass;
    constructor();
    drawNews(data: ResponseNews): void;
    drawSources(data: ResponseSources): void;
    drawMenu(): void;
}
export default AppView;
//# sourceMappingURL=appView.d.ts.map