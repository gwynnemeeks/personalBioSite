import utils from '../../helpers/utils';

import './projects.scss';

const createProjectCards = () => {
  utils.getProjects()
    .then((projects) => {
      let domString = '';
      projects.forEach((project) => {
        domString += `
      <div class="card" style="width: 18rem;" id="cssCard">
      <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${project.technologiesUsed}</h6>
      <p class="card-text">${project.description}</p>
      <a href="#${project.url}" class="card-link">${project.title}</a>
      <a href="#${project.githubUrl}" class="card-link">gitHub</a>
    </div>
  </div>
      `;
      });
      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('did not get projects oops', err));
};

export default { createProjectCards };
