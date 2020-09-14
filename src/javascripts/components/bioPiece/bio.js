import utils from '../../helpers/utils';

import './bio.scss';

const buildBio = () => {
  let domString = '';
  domString += `
  <div class="card mb-3 bioCard" style="max-width: 540px;">
  <div class="row no-gutters">
  <div class="col-md-4">
  <img src="https://i.imgur.com/1Bk3Y7G.jpg" class="card-img" alt="Gwynne Meeks">
  </div>
  <div class="col-md-8">
  <div class="card-body">
  <h5 class="card-title">Developer. Musician. Martial Artist.</h5>
  <p class="card-text">Hello! I'm a recent transplant to Nashville, TN.
  I'm currently attending Nashville Software School to become a Full 
  Stack Software Junior Developer because the more I learn about coding 
  and the influence it has in our world, the more I wanted to become a 
  part of that conversation.</p>
  </div>
  </div>
  </div>
  </div>
  `;
  utils.printToDom('#content', domString);
};

export default { buildBio };
