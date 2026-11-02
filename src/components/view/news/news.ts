import { Article, NewsClass } from 'interfaces/index';
import { findElement } from 'helpers/findElement';
import { hiddenEmptyBlock } from 'helpers/hiddenEmptyBlock';
import './news.css';

class News implements NewsClass {
  public draw(data: Article[]): void {
    const news = data.slice(0, 10);

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
    const newsBlock = document.querySelector<HTMLElement>('.news');

    if (!(newsItemTemp instanceof HTMLTemplateElement)) {
      return;
    }

    if (!newsBlock) {
      return;
    }

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

      if (idx % 2) findElement(newsClone, '.news__item').classList.add('alt');

      findElement(newsClone, '.news__meta-photo').style.backgroundImage =
        `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      findElement(newsClone, '.news__meta-author').textContent = item.author || item.source.name;

      findElement(newsClone, '.news__meta-date').textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      findElement(newsClone, '.news__description-title').textContent = item.title;
      findElement(newsClone, '.news__description-source').textContent = item.source.name;
      findElement(newsClone, '.news__description-content').textContent = item.description;
      findElement(newsClone, '.news__read-more a').setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    newsBlock.innerHTML = '';
    newsBlock.appendChild(fragment);

    if (!data.length) {
      hiddenEmptyBlock(true, 'News not found, Please choose another soources', newsBlock);
    } else {
      hiddenEmptyBlock(false, '', newsBlock);
    }
  }
}

export default News;
