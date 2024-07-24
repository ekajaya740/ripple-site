import BaseComponent from './BaseComponent.js';
import Button from './Button.js';
import GridItem from './GridItem.js';

class ServicesGrid extends BaseComponent {
  constructor(items = []) {
    super();
    this.items = items;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'mt-10 mb-16';

    const gridRow = document.createElement('div');
    gridRow.className = 'row';

    const items = [
      {
        title: 'Web Design',
        subtitle: 'LOREM IPSUM DOLOR SIT AMET.',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet sollicitudin augue, a imperdiet sapien fermentum quis. Vestibulum sed enim quis quam venenatis venenatis eget quis orci.',
        icon: 'assets/images/icon-1.webp',
      },
      {
        title: 'Web Development',
        subtitle: 'LOREM IPSUM DOLOR SIT AMET.',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet sollicitudin augue, a imperdiet sapien fermentum quis. Vestibulum sed enim quis quam venenatis venenatis eget quis orci.',
        icon: 'assets/images/icon-2.webp',
      },
      {
        title: 'Print Design',
        subtitle: 'LOREM IPSUM DOLOR SIT AMET.',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet sollicitudin augue, a imperdiet sapien fermentum quis. Vestibulum sed enim quis quam venenatis venenatis eget quis orci.',
        icon: 'assets/images/icon-3.webp',
      },
      {
        title: 'Digital Media',
        subtitle: 'LOREM IPSUM DOLOR SIT AMET.',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet sollicitudin augue, a imperdiet sapien fermentum quis. Vestibulum sed enim quis quam venenatis venenatis eget quis orci.',
        icon: 'assets/images/icon-4.webp',
      },
    ];

    items.forEach((item) => {
      const gridCol = document.createElement('div');
      gridCol.className = 'col w-235';

      const gridItem = new GridItem({
        ...item,
      });

      const readMoreAnchor = new Button({
        text: 'Read More',
        elementType: 'a',
      });

      gridItem.appendChild(readMoreAnchor);

      gridCol.appendChild(gridItem.render());
      gridRow.appendChild(gridCol);
    });

    container.appendChild(gridRow);

    this.element = container;
    return super.render();
  }
}

export default ServicesGrid;
