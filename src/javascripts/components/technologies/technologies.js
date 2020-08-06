import utils from '../../helpers/utils';

import './technologies.scss';

const buildTech = () => {
  let domString = '';
  domString += '<h4>Technologies</h4>';
  utils.printToDom('#content', domString);
};

export default { buildTech };
