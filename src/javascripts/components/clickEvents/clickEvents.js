import buildBio from '../bioPiece/bio';
import buildProjects from '../projects/projects';
import buildTech from '../technologies/technologies';

const clickEvents = () => {
  $('body').on('click', '#gwynne-bio', buildBio.buildBio);
  $('body').on('click', '#gwynne-projects', buildProjects.createProjectCards);
  $('body').on('click', '#gwynne-tech', buildTech.buildTech);
};

export default { clickEvents };
