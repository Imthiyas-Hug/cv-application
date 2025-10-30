import "../styles/Resume.css";

function formatdate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}
function ContactContent({ contactInfo }) {
  return (
    <div className="contactInfo-container">
      <h1 style={{ marginBottom: "0px" }}>{contactInfo.name}</h1>
      <ul className="contact-list">
        <li>{contactInfo.phone}</li>
        <li>{contactInfo.email}</li>
        <li>
          <a href="">{contactInfo.website}</a>
        </li>
      </ul>
    </div>
  );
}
function EducationInfo({ educationInfo }) {
  return (
    <div className="educationInfo-div">
      <div className="title-university-div">
        <i>
          <h4>{educationInfo.title}</h4>
        </i>
        <span>{educationInfo.university}</span>
      </div>
      <div className="date-gpa-div">
        <i>
          <span>
            {formatdate(educationInfo.startDate) +
              " - " +
              formatdate(educationInfo.endDate)}
          </span>
        </i>
        <span style={{ alignSelf: "end" }}>{"GPA: " + educationInfo.gpa}</span>
      </div>
    </div>
  );
}
function EducationContent({ educationInfo1, educationInfo2 }) {
  return (
    <div className="educationContent-container">
      <h2>EDUCATION</h2>
      <hr />
      <EducationInfo educationInfo={educationInfo1} />
      <EducationInfo educationInfo={educationInfo2} />
    </div>
  );
}
function ExperienceInfo({ experienceInfo }) {
  return experienceInfo.map((exp, index) => (
    <div className="experienceInfo-div" key={index}>
      <div className="role-company-date-div">
        <div className="role-company-div">
          <i>
            <h4>{exp.role}</h4>
          </i>
          <span>{exp.company}</span>
        </div>
        <div className="date-div">
          <i>
            <span>
              {formatdate(exp.startDate) +
                " - " +
                formatdate(exp.endDate)}
            </span>
          </i>
        </div>
      </div>
      <ul>
        <li>
          <p>{exp.description1}</p>
        </li>
        <li>
          <p>{exp.description2}</p>
        </li>
      </ul>
    </div>
  ));
}
function ExperienceContent({ experienceInfo }) {
  return (
    <div className="experienceContent-container">
      <h2>EXPERIENCE</h2>
      <hr />
      <ExperienceInfo experienceInfo={experienceInfo} />
    </div>
  );
}
function ProjectInfo({ projectInfo }) {
  return (
    <div className="projectInfo-div">
      <div className="name-link-div">
        <div>
          <i>
            <h4>{projectInfo.name}</h4>
          </i>
        </div>
        <div className="link-div">
          <a href="">{`(${projectInfo.link})`}</a>
        </div>
      </div>
      <div>
        <ul className="project-desc-div">
          <li>
            <p>{projectInfo.description1}</p>
          </li>
          <li>
            <p>{projectInfo.description2}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
function ProjectContent({ projectInfo1, projectInfo2 }) {
  return (
    <div className="experienceContent-container">
      <h2>PROJECTS</h2>
      <hr />
      <ProjectInfo projectInfo={projectInfo1} />
      <ProjectInfo projectInfo={projectInfo2} />
    </div>
  );
}
function SkillsContent({ skillsInfo }) {
  return (
    <div className="educationContent-container">
      <h2>SKILLS</h2>
      <hr />
      <div className="skill-set-div">
        <div className="skill-set">
          <h4>Languages:</h4>
          <p>{skillsInfo.languages}</p>
        </div>
        <div className="skill-set">
          <h4>Technologies/Frameworks:</h4>
          <p>{skillsInfo.technologies}</p>
        </div>
        <div className="skill-set">
          <h4>Databases:</h4>
          <p>{skillsInfo.databases}</p>
        </div>
        <div className="skill-set">
          <h4>Software and Tools:</h4>
          <p>{skillsInfo.tools}</p>
        </div>
        <div className="skill-set">
          <h4>Platforms:</h4>
          <p>{skillsInfo.platforms}</p>
        </div>
      </div>
    </div>
  );
}
function Resume({
  contactInfo,
  educationInfo1,
  educationInfo2,
  experienceInfo,
  projectInfo1,
  projectInfo2,
  skillsInfo,
}) {
  return (
    <div className="resume-sheet">
      <ContactContent contactInfo={contactInfo} />
      <EducationContent
        educationInfo1={educationInfo1}
        educationInfo2={educationInfo2}
      />
      <ExperienceContent experienceInfo={experienceInfo} />
      <ProjectContent projectInfo1={projectInfo1} projectInfo2={projectInfo2} />
      <SkillsContent skillsInfo={skillsInfo} />
    </div>
  );
}

export default Resume;
