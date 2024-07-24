import BaseComponent from './BaseComponent.js';

class GridItem extends BaseComponent {
  constructor({ thumbnail, title, subtitle, icon, content }) {
    super();
    this.thumbnail = thumbnail;
    this.title = title;
    this.subtitle = subtitle;
    this.icon = icon;
    this.content = content;
  }

  render() {
    const gridItem = document.createElement('div');
    const gridItemBody = document.createElement('div');
    gridItem.className = `grid-item`;

    if (this.title) {
      const title = document.createElement('h2');
      title.textContent = this.title;
      gridItem.appendChild(title);
    }
    if (this.thumbnail) {
      const thumbnailImg = new Image();
      thumbnailImg.src = this.thumbnail;
      thumbnailImg.className = 'my-10 max-w-208';
      gridItem.appendChild(thumbnailImg);
    }

    if (this.subtitle) {
      const subtitle = document.createElement('h3');
      subtitle.textContent = this.subtitle;
      gridItem.appendChild(subtitle);
    }

    if (this.content) {
      if (this.icon) {
        const icon = new Image(38, 43);
        icon.src = this.icon;
        icon.className = 'float-left mr-10';
        gridItemBody.appendChild(icon);
      }
      const content = document.createElement('p');
      content.textContent = this.content;
      content.className = 'display-inline';
      gridItemBody.appendChild(content);
    }

    gridItem.appendChild(gridItemBody);

    this.element = gridItem;
    return super.render();
  }
}

export default GridItem;
