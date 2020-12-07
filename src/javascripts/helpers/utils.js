import axios from 'axios';
import apiKeys from './data/apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const projectObjects = response.data;
      const projects = [];
      if (projectObjects) {
        Object.keys(projectObjects).forEach((projectId) => {
          projectObjects[projectId].id = projectId;
          projects.push(projectObjects[projectId]);
        });
      }
      resolve(projects);
    })
    .catch((err) => reject(err));
});

const getTech = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tech.json`)
    .then((response) => {
      const techObjects = response.data;
      const tech = [];
      if (techObjects) {
        Object.keys(techObjects).forEach((techId) => {
          techObjects[techId].id = techId;
          tech.push(techObjects[techId]);
        });
      }
      resolve(tech);
    })
    .catch((err) => reject(err));
});

const printToDom = (selector, text) => {
  $(selector).html(text);
};

export default { printToDom, getProjects, getTech };
