import BaseComponent from './BaseComponent.js';

class InputGroup extends BaseComponent {
  constructor({ placeholder, iconClass, position = 'end' }) {
    super();
    this.placeholder = placeholder;
    this.iconClass = iconClass;
    this.position = position;
  }

  render() {
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = this.placeholder;

    const inputGroupText = document.createElement('div');
    inputGroupText.className = 'input-group-text bg-transparent';

    const icon = document.createElement('i');
    icon.className = this.iconClass;

    if (this.position === 'start') {
      input.className += ' border-right-0';
      inputGroupText.className += ' border-left-0';
      inputGroup.appendChild(inputGroupText);
      inputGroup.appendChild(input);
    } else {
      input.className += ' border-left-0';
      inputGroupText.className += ' border-right-0';
      inputGroup.appendChild(input);
      inputGroup.appendChild(inputGroupText);
    }

    inputGroupText.appendChild(icon);
    inputGroup.appendChild(input);
    inputGroup.appendChild(inputGroupText);

    this.element = inputGroup;
    return super.render();
  }
}

export default InputGroup;
