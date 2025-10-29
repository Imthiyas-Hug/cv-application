import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import "../styles/Common.css";
import { useState } from "react";

function RenderForm({ projectInfo, handleChange, count }) {
  return (
    <div>
      <form className="project-form form">
        <h3 className="field-title">Project {count}</h3>
        <div className="field-container">
          <label>
            <small>project name</small>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={projectInfo.name}
            />
          </label>
          <label>
            <small>link</small>
            <input
              type="text"
              name="link"
              onChange={handleChange}
              value={projectInfo.link}
            />
          </label>
          <label>
            <small>description 1</small>
            <textarea
              name="description1"
              onChange={handleChange}
              value={projectInfo.description1}
            ></textarea>
          </label>
          <label>
            <small>description 2</small>
            <textarea
              name="description2"
              onChange={handleChange}
              value={projectInfo.description2}
            ></textarea>
          </label>
        </div>
      </form>
    </div>
  );
}

function Projects({
  projectInfo1,
  setProjectInfo1,
  projectInfo2,
  setProjectInfo2,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectInfo1((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setProjectInfo2((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="section-heading" onClick={toggleVisibility}>
        <h3>Projects</h3>
        <img src={isVisible ? minus : plus} className="plus-symbol" />
      </div>
      <div style={{ display: isVisible ? "block" : "none" }}>
        <RenderForm
          projectInfo={projectInfo1}
          handleChange={handleChange}
          count={1}
        />
        <RenderForm
          projectInfo={projectInfo2}
          handleChange={handleChange2}
          count={2}
        />
      </div>
    </div>
  );
}

export default Projects;
