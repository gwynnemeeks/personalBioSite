import utils from '../../helpers/utils';

import './testProjects.scss';

const testProjects = () => {
  utils.getProjects()
    .then((projects) => {
      let domString = '';
      projects.forEach((project) => {
        domString += `
            <div class="artboard">
            <div class="card">

            <div class="card__side card__side--back">
            <div class="card__cover">
            <h4 class="card__heading">
                <span class="card__heading-span">Technologies</span>
            </h4>
            </div>
            <div class="card__details">
                <ul>
                    <li>${project.technologiesUsed}</li>
                    <li>${project.description}</li>
                </ul>
            </div>
            </div>

            <div class="card__side card__side--front">
            <div class="card__theme">
            <div class="card__theme-box">
                <p class="card__subject">${project.title}</p>
                <p class="card__title">${project.description}</p>
            </div>
            </div>
            </div>

            </div>
            </div>
            `;
      });
      utils.printToDom('#test', domString);
    })
    .catch((err) => console.error('styling oops', err));
};

export default { testProjects };
