import BaseComponent from './BaseComponent.js';

class FooterDividerDecoration extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    const container = document.createElement('div');

    const a = document.createElement('div');
    const b = document.createElement('div');
    const c = document.createElement('div');

    a.className = 'divider-2 border-ececec';
    b.className = 'divider mx-1 my-1 border-ececec';
    c.className = 'divider-2 border-ececec';

    container.appendChild(a);
    container.appendChild(b);
    container.appendChild(c);

    this.element = container;
    return super.render();
  }
}

export default FooterDividerDecoration;
