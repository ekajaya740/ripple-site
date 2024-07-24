class BaseComponent {
  constructor() {
    this.element = null;
    this.className = '';
    this.customComponents = [];
  }

  appendChild(component) {
    this.customComponents.push(component);
  }

  render() {
    if (
      this.element &&
      this.customComponents &&
      this.customComponents.length > 0
    ) {
      this.customComponents.forEach((component) => {
        this.element.appendChild(component.render());
      });
    }

    return this.element;
  }
}

export default BaseComponent;
