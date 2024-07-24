import BaseComponent from './BaseComponent.js';
import FooterItems from './FooterItems.js';

class Footer extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    const container = document.createElement('div');
    container.className = 'divider border-c6c7c7 footer';

    const gridRow = document.createElement('div');
    gridRow.className = 'row';

    const gridCol1 = document.createElement('div');
    gridCol1.className = 'col';
    const gridCol2 = document.createElement('div');
    gridCol2.className = 'col';
    const gridCol3 = document.createElement('div');
    gridCol3.className = 'col';
    const gridCol4 = document.createElement('div');
    gridCol4.className = 'col';

    const item1 = new FooterItems({
      title: 'Partners',
      items: [
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
      ],
    });

    const item2 = new FooterItems({
      title: 'Categories',
      items: [
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
      ],
    });

    const item3 = new FooterItems({
      title: 'Resources',
      items: [
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          href: '#',
        },
      ],
    });

    const item4 = new FooterItems({
      title: 'News & Updates',
      items: [
        {
          title: 'Lorem ipsum dolor sit',
          href: '#',
          date: '24/04/11',
        },
        {
          title: 'Lorem ipsum dolor sit',
          href: '#',
          date: '24/04/11',
        },
        {
          title: 'Lorem ipsum dolor sit',
          href: '#',
          date: '24/04/11',
        },
      ],
    });

    gridCol1.appendChild(item1.render());
    gridCol2.appendChild(item2.render());
    gridCol3.appendChild(item3.render());
    gridCol4.appendChild(item4.render());

    gridRow.appendChild(gridCol1);
    gridRow.appendChild(gridCol2);
    gridRow.appendChild(gridCol3);
    gridRow.appendChild(gridCol4);

    container.appendChild(gridRow);

    this.element = container;
    return super.render();
  }
}

export default Footer;
