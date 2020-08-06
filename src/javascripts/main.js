import '../styles/main.scss';
import navBar from './components/navBar/navbar';
import clickEvents from './components/clickEvents/clickEvents';
// import projectCards from './components/projects/projects';
// import buildBio from './components/bioPiece/bio';
// import buildTech from './components/technologies/technologies';

const init = () => {
  navBar.buildNavBar();
  clickEvents.clickEvents();
  // buildBio.buildBio();
  // buildTech.buildTech();
  // projectCards.createProjectCards();
};

init();
