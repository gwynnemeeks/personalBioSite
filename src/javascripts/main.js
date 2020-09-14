import '../styles/main.scss';
import navBar from './components/navBar/navbar';
import clickEvents from './components/clickEvents/clickEvents';
import contactInfo from './components/contact/contact';

const init = () => {
  navBar.buildNavBar();
  contactInfo.buildContactInfo();
  clickEvents.clickEvents();
};

init();
