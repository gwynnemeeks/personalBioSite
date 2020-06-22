import utils from '../../helpers/utils';
import 'bootstrap';
import './navBar.scss';

const buildNavBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Gwynne Meeks</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link" href="#">Bio<span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Technologies</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Projects</a>
    </li>
    </ul>
    </div>
    </nav>
  `;
  utils.printToDom('#theNavBar', domString);
};

export default { buildNavBar };
