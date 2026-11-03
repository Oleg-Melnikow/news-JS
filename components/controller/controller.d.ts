import { ResponseNews, ResponseSources } from 'interfaces/index';
import AppLoader from './appLoader';
declare class AppController extends AppLoader {
    getSources(callback: (data: ResponseSources) => void, e?: Event): void;
    getNews(e: Event, callback: (data: ResponseNews) => void): void;
}
export default AppController;
//# sourceMappingURL=controller.d.ts.map