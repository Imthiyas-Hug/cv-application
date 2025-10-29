import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import "../styles/Common.css";
import { useState } from "react";

function Skills({ skillsInfo, setSkillsInfo }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkillsInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="section-heading" onClick={toggleVisibility}>
        <h3>Skills</h3>
        <img src={isVisible ? minus : plus} className="plus-symbol" />
      </div>
      <div style={{ display: isVisible ? "block" : "none" }}>
        <form className="skills-form form">
          <div className="form-field">
            <label>
              <small>languages</small>
              <input
                type="text"
                name="languages"
                value={skillsInfo.languages}
                onChange={handleChange}
              />
            </label>
            <label>
              <small>technologies</small>
              <input
                type="text"
                name="technologies"
                value={skillsInfo.technologies}
                onChange={handleChange}
              />
            </label>
            <label>
              <small>databases</small>
              <input
                type="text"
                name="databases"
                value={skillsInfo.databases}
                onChange={handleChange}
              />
            </label>
            <label>
              <small>tools</small>
              <input
                type="text"
                name="tools"
                value={skillsInfo.tools}
                onChange={handleChange}
              />
            </label>
            <label>
              <small>platforms</small>
              <input
                type="text"
                name="platforms"
                value={skillsInfo.platforms}
                onChange={handleChange}
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Skills;
