import BaseComponent from './BaseComponent.js';
import Button from './Button.js';
import GridItem from './GridItem.js';

class LatestWorksGrid extends BaseComponent {
  constructor(items = []) {
    super();
    this.items = items;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'mt-10 mb-16';

    const titleText = document.createElement('h3');
    titleText.className = 'my-16';
    titleText.textContent = 'view our latest works';

    container.appendChild(titleText);

    const gridRow = document.createElement('div');
    gridRow.className = 'row';

    const items = [
      {
        thumbnail: 'assets/images/works-1.webp',
        subtitle: 'LOREM IPSUM DOLOR SIT AMET.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      },
      {
        thumbnail: 'assets/images/works-2.webp',
        subtitle: 'LOREM IPSUM DOLOR SIT AMET.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      },
      {
        thumbnail: 'assets/images/works-3.webp',
        subtitle: 'LOREM IPSUM DOLOR SIT AMET.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      },
      {
        thumbnail: 'assets/images/works-4.webp',
        subtitle: 'LOREM IPSUM DOLOR SIT AMET.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      },
    ];

    items.forEach((item) => {
      const gridCol = document.createElement('div');
      gridCol.className = 'col w-214';

      const gridItem = new GridItem({
        ...item,
      });

      gridCol.appendChild(gridItem.render());
      gridRow.appendChild(gridCol);
    });

    container.appendChild(gridRow);

    this.element = container;
    return super.render();
  }
}

export default LatestWorksGrid;
