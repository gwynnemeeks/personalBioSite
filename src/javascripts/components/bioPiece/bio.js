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
  <h5 class="card-title">Writer. Martial Artist. Developer.</h5>
  <p class="card-text">Hello World! I'm a recent transplant to Nashville, TN from
  San Diego, CA. I attended Nashville Software School to become a Full 
  Stack Software Developer after being introduced to coding by a family member.
  I love the creativity it encourages in problem solving. The more I learn about coding 
  and the influence it has in our world, the more I wanted to become a 
  part of that conversation.</p>
  </div>
  </div>
  </div>
  </div>
  `;
  utils.printToDom('#bio', domString);
};

export default { buildBio };
