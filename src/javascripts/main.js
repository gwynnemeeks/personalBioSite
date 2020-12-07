import '../styles/main.scss';
import navBar from './components/navBar/navbar';
import clickEvents from './components/clickEvents/clickEvents';
import contactInfo from './components/contact/contact';
import test from './components/projects/testProjects';

const init = () => {
  navBar.buildNavBar();
  contactInfo.buildContactInfo();
  test.testProjects();
  clickEvents.clickEvents();
};

init();
