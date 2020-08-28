import utils from '../../helpers/utils';

import './bio.scss';

const buildBio = () => {
  let domString = '';
  domString += `
  <h4>Gwynne Meeks</h4>
  <img src="src/img/profile.png" class="rounded float-left" alt="...">
  <p>Personal Bio Here</p>
  `;
  utils.printToDom('#content', domString);
};

export default { buildBio };
