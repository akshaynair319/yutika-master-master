import './projects.css';
import atom from '../assets/images/atom.png'; // Import the image
import cover from '../assets/images/cover.png'; // Import the image
import mess from '../assets/images/mess.png'; // Import the image
import niftt from '../assets/images/niftt.png'; // Import the image

function Projects() {
  const projectData = [
    {
      id: 1,
      image: cover, // Bulbasaur
      name: 'Form Pattern Documentation',
      type: 'Goldman Sachs | Internship',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
      infoButton: 'Under NDA'
    },
    {
      id: 2,
      image: mess, // Charmander
      name: 'Atom Meditation Mobile App',
      type: 'Atom EI | Internship',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
      infoButton: 'Coming Soon'
    },
    {
      id: 3,
      image: niftt, // Squirtle
      name: 'Connection Aid',
      type: 'Delhi Govt. | Internship',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
      infoButton: 'Read Full Case Study'
    },
    {
      id: 4,
      image: mess, // Bulbasaur
      name: 'Form Pattern Documentation',
      type: 'Goldman Sachs | Internship',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
      infoButton: 'Under NDA'
    },
    {
      id: 5,
      image: niftt, // Charmander
      name: 'Atom Meditation Mobile App',
      type: 'Atom EI | Internship',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
      infoButton: 'Coming Soon'
    },
    {
      id: 6,
      image: cover, // Squirtle
      name: 'Connection Aid',
      type: 'Delhi Govt. | Internship',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.',
      infoButton: 'Read Full Case Study'
    },
  ];

  return (
    <section className="page-section projects" id="projects">
      <div className="projects-title">
        <span className="primary">Featured Work</span>
        <span className='secondary'>All Projects <i className="fas fa-external-link-alt"></i> </span>
      </div>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-tile">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-content">
              <span className="project-name">{project.name}</span>
              <span className="project-type">{project.type}</span>
              <span className="project-description">{project.description}</span>
              <span className="hero-job" style={{marginTop: 'auto', fontSize: '0.75rem'}}>
                {project.infoButton} <img src={atom} alt="Atom EI" className="hero-image" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;