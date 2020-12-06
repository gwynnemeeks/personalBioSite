import utils from '../../helpers/utils';
import 'bootstrap';
import './contact.scss';

const buildContactInfo = () => {
  const domString = `
    <h1>Gwynne Meeks</h1>
    <a href="mailto:meeks.gwynne@gmail.com"><i class="far fa-envelope fa-3x"></i></a>
    <a href="https://github.com/gwynnemeeks" target="_new"><i class="fab fa-github fa-3x"></i></a>
    <a href="https://www.linkedin.com/in/gwynnemeeks/" target="_new"><i class="fab fa-linkedin fa-3x"></i></a>
    
    `;
  utils.printToDom('#contactInfo', domString);
};

export default { buildContactInfo };
