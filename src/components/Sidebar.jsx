import Contact from "./Contact.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import '../styles/Sidebar.css';
import icon from '../assets/resumeIcon.png'

function Sidebar({
  contactInfo,
  setContactInfo,
  educationInfo1,
  setEducationInfo1,
  educationInfo2,
  setEducationInfo2,
  experienceInfo,
  setExperienceInfo,
  projectInfo1,
  setProjectInfo1,
  projectInfo2,
  setProjectInfo2,
  skillsInfo,
  setSkillsInfo,
}) {

  return (
    <div className="sidebar-div">
      <div className="side-heading">
        <img src={icon} style={{width:50}}/>
        <h1>CV Generator</h1>
      </div>

      <p>Fill in the fields below to get started.</p>
      <Contact contactInfo={contactInfo} setContactInfo={setContactInfo} />
      <Education
        educationInfo1={educationInfo1}
        setEducationInfo1={setEducationInfo1}
        educationInfo2={educationInfo2}
        setEducationInfo2={setEducationInfo2}
      />
      <Experience
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
      />
      <Projects
        projectInfo1={projectInfo1}
        setProjectInfo1={setProjectInfo1}
        projectInfo2={projectInfo2}
        setProjectInfo2={setProjectInfo2}
      />
      <Skills skillsInfo={skillsInfo} setSkillsInfo={setSkillsInfo} />
    </div>
  );
}

export default Sidebar;
