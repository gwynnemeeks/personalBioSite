import projectData from '../../helpers/data/projectData';
import utils from '../../helpers/utils';

const projectsCollection = projectData.getProjects();

const createProjectCards = () => {
  let domString = '';
  projectsCollection.forEach((projects) => {
    domString += `<div class="projects">
      <h2>${projects.title}</h2>
      <img src="${projects.screenshot}" alt="">
      <h3>${projects.description}</h3>
      <p>${projects.technologiesUsed}</p>
      <h4>${projects.url}</h4>
      <h4>${projects.githubUrl}</h4>
      </div>
      `;
  });
  utils.printToDom('#projectsCards', domString);
};

export default { createProjectCards };
