import Divider from '../../components/Divider.js';
import Navbar from '../../components/Navbar.js';
import ServicesGrid from '../../components/ServicesGrid.js';
import Slider from '../../components/Slider.js';
import WelcomeGrid from '../../components/WelcomeGrid.js';
import LatestWorksGrid from '../../components/LatestWorksGrid.js';
import Footer from '../../components/Footer.js';

class App {
  constructor() {
    this.container = document.getElementById('app');
  }

  render() {
    const navbar = new Navbar('MyApp', [
      { href: '#', text: 'Home' },
      { href: '#', text: 'Shortcodes' },
      { href: '#', text: 'Portfolio' },
      { href: '#', text: 'Blog' },
      { href: '#', text: 'Contact' },
    ]);

    const slider = new Slider('assets/images/hero.webp');
    const divider = new Divider();
    const servicesGrid = new ServicesGrid();
    const welcomeGrid = new WelcomeGrid();
    const latestWorksGrid = new LatestWorksGrid();
    const footer = new Footer();

    this.container.appendChild(navbar.render());
    this.container.appendChild(slider.render());
    this.container.appendChild(divider.render());
    this.container.appendChild(servicesGrid.render());
    this.container.appendChild(divider.render());
    this.container.appendChild(welcomeGrid.render());
    this.container.appendChild(divider.render());
    this.container.appendChild(latestWorksGrid.render());
    this.container.appendChild(footer.render());
  }
}

const app = new App();
app.render();
