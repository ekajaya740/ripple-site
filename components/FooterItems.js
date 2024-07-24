import BaseComponent from './BaseComponent.js';
import FooterDividerDecoration from './FooterDividerDecoration.js';

class FooterItems extends BaseComponent {
  constructor({ title, items = [] }) {
    super();
    this.title = title;
    this.items = items;
  }

  render() {
    const container = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = this.title;

    const divider = new FooterDividerDecoration();

    container.appendChild(title);
    container.appendChild(divider.render());

    if (this.items.length > 0) {
      const outerContainer = document.createElement('div');
      outerContainer.className = 'my-12';
      this.items.forEach((item) => {
        const childContainer = document.createElement('div');

        if (item.title && item.href) {
          const titleAnchor = document.createElement('a');

          if (item.date) {
            const dateSpan = document.createElement('span');
            dateSpan.textContent = `${item.date} - `;
            dateSpan.className = 'text-ffa924';
            titleAnchor.appendChild(dateSpan);
          }

          titleAnchor.href = item.href;

          const titleText = document.createTextNode(item.title);
          titleAnchor.appendChild(titleText);

          childContainer.appendChild(titleAnchor);
        }

        outerContainer.appendChild(childContainer);
      });
      container.appendChild(outerContainer);
    }

    this.element = container;
    return this.element;
  }
}

export default FooterItems;
