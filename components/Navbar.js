import BaseComponent from './BaseComponent.js';

class Navbar extends BaseComponent {
  constructor(brandName, links = []) {
    super();
    this.brandName = brandName;
    this.links = links; // Expecting an array of objects with { href, text }
  }

  render() {
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-custom';

    const container = document.createElement('div');
    container.className = 'container-fluid';

    const brand = document.createElement('a');
    brand.className = 'navbar-brand';
    brand.href = '#';

    const brandImage = document.createElement('img');
    brandImage.src = './assets/images/logo.webp';
    brandImage.alt = 'Logo';
    brandImage.width = 137;
    brandImage.className = 'd-inline-block align-text-top';

    brand.appendChild(brandImage);

    const button = document.createElement('button');
    button.className = 'navbar-toggler';
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', '#navbarNav');
    button.setAttribute('aria-controls', 'navbarNav');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Toggle navigation');
    button.innerHTML = `<span class="navbar-toggler-icon"></span>`;

    const collapse = document.createElement('div');
    collapse.className = 'collapse navbar-collapse justify-content-end';
    collapse.id = 'navbarNav';

    const ul = document.createElement('ul');
    ul.className = 'navbar-nav';

    this.links.forEach((link) => {
      const li = document.createElement('li');
      li.className = 'nav-item';

      const a = document.createElement('a');
      a.className = 'nav-link';
      a.href = link.href;
      a.innerText = link.text;

      li.appendChild(a);
      ul.appendChild(li);
    });

    collapse.appendChild(ul);
    container.appendChild(brand);
    container.appendChild(button);
    container.appendChild(collapse);
    nav.appendChild(container);

    this.element = nav;
    return super.render();
  }
}

export default Navbar;
