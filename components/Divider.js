import BaseComponent from './BaseComponent.js';

class Divider extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    const divider = document.createElement('div');
    divider.className = 'divider py-2 border-c6c7c7';

    this.element = divider;

    return super.render();
  }
}

export default Divider;
