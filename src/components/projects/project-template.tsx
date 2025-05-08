import './project-template.css';
import sticky from './../../assets/sticky.svg'; // Import the image
// Define the props type
interface ProjectDetails {
    name: string;
    title: string;
    experience: {
      title: string;
      content: any;
    };
    coverImg: string;
    secondaryImg: string;
    problemStatement: any;
  }

function ProjectTemplate({projectDetails}: {projectDetails: ProjectDetails}) {
  return (
    <div className="project-template">
        <div className="inner-container heading">
            <div className="primary-heading">{projectDetails.name}</div>
            <div className="secondary-heading">{projectDetails.title}</div>
        </div>
        <img src={projectDetails.coverImg} alt={"cover-image"} className="cover-image" />
        <div className='inner-container project-experience'>
            <img src={sticky} alt="Sticky" className="sticky-image" style={{alignSelf: "normal"}}/>
            <span style={{display: 'flex', flexDirection: 'column', marginLeft: '1rem', alignItems: "flex-start"}}>
                <span style={{color: "#7f7f7f"}}>{projectDetails.experience.title}</span>
                <span style={{textAlign: "left", display: "flex", flexDirection: "column", gap: "1rem"}}>
                    {projectDetails.experience.content}
                </span>
            </span>
      </div>
      <div className="inner-container problem-statement">
        <span style={{fontSize: "2rem", color: "#FFFFFFBF", marginBottom: "2rem"}}>Problem Statement</span>
        <span style={{fontSize: "1rem", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "1rem"}}>
            {projectDetails.problemStatement}
        </span>
      </div>
      <img src={projectDetails.secondaryImg} alt={"secondary-image"} className="inner-container secondary-image" />
    </div>
  );
}

export default ProjectTemplate;