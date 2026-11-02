import { ResponseNews, ResponseSources, RequestOptions } from 'interfaces/index';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  public getSources(callback: (data: ResponseSources) => void, e?: Event): void {
    if (e && e.target instanceof HTMLSelectElement) {
      const select = e.target;
      const currentCategory = select.getAttribute('data-category') ?? '';

      if (currentCategory !== select.value) {
        select.setAttribute('data-category', select.value);
      }

      // Формируем параметры: если выбрано не 'all', передаем выбранную категорию
      const params: RequestOptions = select.value !== 'all' ? { category: select.value } : {};

      super.getResp({ endpoint: 'sources', options: params }, callback);
    } else {
      super.getResp({ endpoint: 'sources' }, callback);
    }
  }

  public getNews(e: Event, callback: (data: ResponseNews) => void): void {
    const target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    // Метод .closest() заменяет весь цикл while и сам поднимается до нужного предка
    const sourceItem = target.closest('.source__item');

    // Проверяем, что клик был внутри источника и этот источник находится внутри нашего контейнера
    if (sourceItem && newsContainer.contains(sourceItem)) {
      const sourceId = sourceItem.getAttribute('data-source-id') ?? '';
      const currentSourceId = newsContainer.getAttribute('data-source') ?? '';

      // Если кликнули на новый источник, обновляем атрибут и делаем запрос
      if (currentSourceId !== sourceId) {
        newsContainer.setAttribute('data-source', sourceId);
        super.getResp(
          {
            endpoint: 'everything',
            options: { sources: sourceId },
          },
          callback
        );
      }
    }
  }
}

export default AppController;
