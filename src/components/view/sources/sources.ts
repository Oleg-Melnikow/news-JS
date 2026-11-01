import './sources.css';
import { Source, SourceClass } from 'interfaces/index';
import { findElement } from 'helpers/findElement';

class Sources implements SourceClass {
  draw(data: Source[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
    const sourcesBlock = document.querySelector('.sources');

    if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
      return;
    }

    if (!sourcesBlock) {
      return;
    }

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

      findElement(sourceClone, '.source__item-name').textContent = item.name;
      findElement(sourceClone, '.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    sourcesBlock.append(fragment);
  }
}

export default Sources;
