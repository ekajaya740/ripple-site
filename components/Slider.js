import BaseComponent from './BaseComponent.js';

class Slider extends BaseComponent {
  constructor(src, alt) {
    super();
    this.src = src;
    this.alt = alt;
  }

  render() {
    const img = new Image();

    img.src = this.src;
    img.alt = this.alt;

    img.className = 'img-fluid w-100 py-24';

    this.element = img;

    return super.render();
  }
}

export default Slider;
