import BaseComponent from './BaseComponent.js';

import GridItem from './GridItem.js';
import InputGroup from './InputGroup.js';

class WelcomeGrid extends BaseComponent {
  constructor(items = []) {
    super();
    this.items = items;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'mt-10 mb-16';

    const gridRow = document.createElement('div');
    gridRow.className = 'row';

    const welcomeItem = {
      title: 'welcome',
      subtitle: 'why were here and what we do',
      content:
        'Maecenas leo arcu, tempus et blandit at, consequat laoreet lacus. Pellentesque erat ligula, bibendum id vehicula vitae, blandit at odio. Nunc hendrerit nulla vitae ligula commodo malesuada. Ut sed lacus ligula, eu dignissim lacus. Praesent nunc erat, commodo sit amet auctor eu, porttitor a est. Nullam non metus nulla........',
    };

    const stayUpdateItem = {
      title: 'stay updated',
      subtitle: 'join our mailing list',
      content:
        'Maecenas leo arcu, tempus et blandit at, consequat laoreet lacus. Pellentesque erat ligula, bibendum id vehicula vitae, blandit at odio. Nunc hendrerit nulla vitae ligula commodo',
    };

    const gridColClassName = 'col';

    const welcomeGridCol = document.createElement('div');
    welcomeGridCol.className = gridColClassName;
    const welcomeGridItem = new GridItem({ ...welcomeItem });
    welcomeGridCol.appendChild(welcomeGridItem.render());

    const emailInput = new InputGroup({
      placeholder: 'you@yourdomain.com',
      iconClass: 'bi bi-envelope-fill',
    });
    const stayUpdateGridCol = document.createElement('div');
    stayUpdateGridCol.className = gridColClassName;
    const stayUpdateGridItem = new GridItem({ ...stayUpdateItem });
    stayUpdateGridItem.appendChild(emailInput);
    stayUpdateGridCol.appendChild(stayUpdateGridItem.render());

    gridRow.appendChild(welcomeGridCol);
    gridRow.appendChild(stayUpdateGridCol);

    container.appendChild(gridRow);

    this.element = container;
    return super.render();
  }
}

export default WelcomeGrid;
