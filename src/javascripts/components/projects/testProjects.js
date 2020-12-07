import utils from '../../helpers/utils';

import './testProjects.scss';

const testProjects = () => {
  utils.getProjects()
    .then((projects) => {
      let domString = '';
      projects.forEach((project) => {
        domString += `
        <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="${project.screenshot}">
                    <h3>${project.title}</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>${project.description}</p>
                    <a href="#${project.url}" class="card-link">${project.title}</a>
                    <a href="#${project.githubUrl}" class="card-link">fontAwesome</a>
                </div>
            </div>
        </div>
        </div>
            `;
      });
      utils.printToDom('#testProjects', domString);
    })
    .catch((err) => console.error('styling oops', err));
};

export default { testProjects };
