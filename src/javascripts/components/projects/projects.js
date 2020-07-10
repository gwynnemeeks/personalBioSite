import projectData from '../../helpers/data/projectData';
import utils from '../../helpers/utils';

import './projects.scss';

const projectsCollection = projectData.getProjects();

const createProjectCards = () => {
  let domString = '';
  projectsCollection.forEach((projects) => {
    domString += `
    <div class="card" style="width: 18rem;" id="cssCard">
    <div class="card-body">
    <h5 class="card-title">${projects.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${projects.technologiesUsed}</h6>
    <p class="card-text">${projects.description}</p>
    <a href="#${projects.url}" class="card-link">${projects.title}</a>
    <a href="#${projects.githubUrl}" class="card-link">gitHub</a>
  </div>
</div>
    `;
  });
  utils.printToDom('#projectCards', domString);
};

export default { createProjectCards };
