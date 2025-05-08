import atom from '../../assets/images/atom_ei.png';
import ProjectTemplate from './project-template';

function AtomMeditationApp() {
    const projectDetails = {
        name: "Atom Meditation App",
        title: "Enhancing User Engagement During Onboarding",
        experience: {
            title: "My Internship Experience",
            content: 
            <>
              <span>During my internship at Atom, I embraced multiple roles spanning design and research while working on their meditation app - which specifically focused on helping beginners establish meditation as a consistent daily habit. I connected with the mission of leveraging behavioral psychology, gamification, and AI to help users achieve better self-regulation. At the time, the app boasted 500K+ users and was the highest-rated meditation application on the Google Play Store.</span> 
              <span>My contributions spanned diverse projects, including redesigning the onboarding flow to reduce drop-off rates and implementing gamification elements to increase user retention at critical checkpoints. I also conceptualized interactive meditation experiences, developed in-app feedback mechanisms, and created concept explorations for applying Atom's behavioral principles to new domains like finance and exercise.</span>
              <span>I learned how to design effectively using gamification principles and apply behavioral psychology insights to digital product development. I conducted cross-geographical usability testing that revealed crucial cultural differences and collaborated within a multidisciplinary team comprising designers, product managers, researchers, psychologists, engineers, and founders. Throughout the internship, I learned to leverage analytics to inform and validate design decisions.</span>
            </>
            ,
        },
        problemStatement: 
        <>
          <span>During my internship at Atom, I embraced multiple roles spanning design and research while working on their meditation app - which specifically focused on helping beginners establish meditation as a consistent daily habit. I connected with the mission of leveraging behavioral psychology, gamification, and AI to help users achieve better self-regulation. At the time, the app boasted 500K+ users and was the highest-rated meditation application on the Google Play Store.</span>
          <span>My contributions spanned diverse projects, including redesigning the onboarding flow to reduce drop-off rates and implementing gamification elements to increase user retention at critical checkpoints. I also conceptualized interactive meditation experiences, developed in-app feedback mechanisms, and created concept explorations for applying Atom's behavioral principles to new domains like finance and exercise.</span>
          <span>I learned how to design effectively using gamification principles and apply behavioral psychology insights to digital product development. I conducted cross-geographical usability testing that revealed crucial cultural differences and collaborated within a multidisciplinary team comprising designers, product managers, researchers, psychologists, engineers, and founders. Throughout the internship, I learned to leverage analytics to inform and validate design decisions.</span>           
        </>,
        coverImg: atom,
        secondaryImg: atom,
    }
  return (
    <ProjectTemplate projectDetails={projectDetails}></ProjectTemplate>
  );
}

export default AtomMeditationApp;