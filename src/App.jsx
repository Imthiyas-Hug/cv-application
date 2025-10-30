import { useState } from "react";
import Sidebar from "./components/SideBar.jsx";
import Resume from "./components/Resume.jsx";
import './App.css';
function App() {
  const [contactInfo, setContactInfo] = useState({
    name: "Imthiyas Hug",
    phone: "(+61) 412 345 678",
    email: "email@domain.com",
    website: "linkedin.com/in/example",
  });

  const [educationInfo1, setEducationInfo1] = useState({
    title: "Masters in Science, Software Engineering",
    university: "Example University",
    gpa: "3.82",
    startDate: "Aug 2019",
    endDate: "May 2022",
  });

  const [educationInfo2, setEducationInfo2] = useState({
    title: "Bachelor of Engineering, Computer Engineering",
    university: "Example University",
    gpa: "3.25",
    startDate: "Aug 2015",
    endDate: "Jun 2017",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    role: "Software Engineer Intern",
    company: "Embark",
    description1:
      "Worked with product managers to re-architect a multi-page web app into a single page web-app, boosting yearly revenue by $1.4M",
    description2:
      "Constructed the logic for a streamlined ad-serving platform that scaled to our 35M users, which improved the page speed by 15% after implementation",
    startDate: "May 2022",
    endDate: "Nov 2022",
  });

  // const [experienceInfo2, setExperienceInfo2] = useState({
  //   role: "Software Engineer Intern",
  //   company: "MarketSmart",
  //   description1:
  //     "Built RESTful APIs that served data to the JavaScript front-end based on dynamically chosen user inputs that handled over 500,000 concurrent users",
  //   description2:
  //     "Built internal tools using NodeJS and Pupeteer.js to automate QA and monitoring of donor-facing web app, which improved CTR by 20%",
  //   startDate: "May 2021",
  //   endDate: "Nov 2021",
  // });

  const [projectInfo1, setProjectInfo1] = useState({
    name: "Poker Simulation",
    link: "https://link-to-project.com",
    description1:
      "Built a full-stack web app to allow users to simulate and visualize outcomes of poker hands against opponents of different play styles using open source cards.js on the front-end",
    description2:
      "Utilized sci-kit learn in Python to simulate possible outcomes under different scenarios that the user chose",
  });

  const [projectInfo2, setProjectInfo2] = useState({
    name: "Real-Time Interactive 3D-Graphics Website",
    link: "https://link-to-project.com",
    description1:
      "Developed an interactive graphics website using THREE.js to create a 3D workspace with real-time animated 3D models of crystal lattice structures and robotic parts in which animations and camera views can be manipulated.",
    description2:
      "Utilized Python, Flask, Heroku, JavaScript, AJAX, THREE.js, HTML/CSS, Docker, Git.",
  });

  const [skillsInfo, setSkillsInfo] = useState({
    languages: "Java, Python, JavaScript, SQL, C, C++, Bash",
    technologies: "NodeJS, Express, ReactJS, Django, JSON, Kafka, Flask, Spark",
    databases: "PostgreSQL, MongoDB, MySQL",
    tools: "Git, VSCode, GitHub, JIRA, Postman, Selenium",
    platforms: "AWS EC2, Linux, MACOS, Docker, Kubernetes",
  });

  return (
    <div className="main-div">
      <Sidebar
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
        educationInfo1={educationInfo1}
        setEducationInfo1={setEducationInfo1}
        educationInfo2={educationInfo2}
        setEducationInfo2={setEducationInfo2}
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
        projectInfo1={projectInfo1}
        setProjectInfo1={setProjectInfo1}
        projectInfo2={projectInfo2}
        setProjectInfo2={setProjectInfo2}
        skillsInfo={skillsInfo}
        setSkillsInfo={setSkillsInfo}
      />
      <Resume
        contactInfo={contactInfo}
        educationInfo1={educationInfo1}
        educationInfo2={educationInfo2}
        experienceInfo={experienceInfo}
        projectInfo1={projectInfo1}
        projectInfo2={projectInfo2}
        skillsInfo={skillsInfo}
      />
    </div>
  );
}

export default App;
