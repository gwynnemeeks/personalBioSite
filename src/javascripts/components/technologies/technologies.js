import utils from '../../helpers/utils';

import './technologies.scss';

const buildTech = () => {
  let domString = '';
  domString += `
  <div class="card techCard">
  <div class="card-body">
  <i class="fab fa-js-square fa-2x"></i>
  <i class="fab fa-css3-alt fa-2x"></i>
  <i class="fab fa-sass fa-2x"></i>
  <i class="fab fa-html5 fa-2x"></i>
  <i class="fab fa-react fa-2x"></i>
  </div>
</div>
  `;
  utils.printToDom('#content', domString);
};

export default { buildTech };
