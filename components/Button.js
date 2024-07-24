import BaseComponent from './BaseComponent.js';

class Button extends BaseComponent {
  constructor({ text, elementType, href = '#' }) {
    super();

    this.elementType = elementType;
    this.text = text;
    this.href = href;
  }

  render() {
    const className = 'btn';

    if (this.elementType === 'a') {
      const anchor = document.createElement('a');
      anchor.className = className;
      anchor.textContent = this.text;
      anchor.href = this.href;

      this.element = anchor;
      return super.render();
    }

    const button = document.createElement('button');
    button.className = className;
    button.textContent = this.text;
    this.element = button;
    return super.render();
  }
}

export default Button;
