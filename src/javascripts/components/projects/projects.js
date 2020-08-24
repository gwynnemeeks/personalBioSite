import utils from '../../helpers/utils';

import './projects.scss';

const getProjects = () => utils.readData('projects');

const createProjectCards = () => {
  getProjects()
    .then((projects) => {
      let domString = '';
      projects.forEach((eachProject) => {
        domString += `
      <div class="card" style="width: 18rem;" id="cssCard">
      <div class="card-body">
      <h5 class="card-title">${eachProject.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${eachProject.technologiesUsed}</h6>
      <p class="card-text">${eachProject.description}</p>
      <a href="#${eachProject.url}" class="card-link">${eachProject.title}</a>
      <a href="#${eachProject.githubUrl}" class="card-link">gitHub</a>
    </div>
  </div>
      `;
      });
      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('did not get projects oops', err));
};

export default { createProjectCards };
