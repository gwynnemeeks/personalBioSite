import utils from '../../helpers/utils';

import './bio.scss';

const buildBio = () => {
  let domString = '';
  domString += '<h4>Personal Bio Here</h4>';
  utils.printToDom('#content', domString);
};

export default { buildBio };
