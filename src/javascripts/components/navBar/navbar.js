import utils from '../../helpers/utils';
import 'bootstrap';
import './navBar.scss';

const buildNavBar = () => {
  const domString = `
  <nav class="navbar fixed-top">
  <a class="navbar-brand" href="#" id="return-home">
  </a>
    <div>
  <button type="button" class="btn btn-dark filterButton nav-button" id="gwynne-bio" value="Bio">Bio</button>
  <button type="button" class="btn btn-dark filterButton nav-button" id="gwynne-projects" value="Projects">Projects</button>
  <button type="button" class="btn btn-dark filterButton nav-button" id="gwynne-tech" value="Technologies">Technologies</button>
  </div>
  </nav>
  `;
  utils.printToDom('#theNavBar', domString);
};

export default { buildNavBar };
