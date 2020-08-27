import '../styles/main.scss';
import navBar from './components/navBar/navbar';
import clickEvents from './components/clickEvents/clickEvents';

const init = () => {
  navBar.buildNavBar();
  clickEvents.clickEvents();
};

init();
