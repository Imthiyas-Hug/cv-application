import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import "../styles/Common.css";
import { useState } from "react";

function RenderForm({ experienceInfo, handleChange, count }) {
  return (
    <div>
      <form className="experience-form form">
        <h3 className="field-title">Experience {count}</h3>
        <div className="field-container">
          <div className="date-field">
            <label>
              <small>start date</small>
              <input
                type="date"
                name="startDate"
                onChange={handleChange}
                value={experienceInfo.startDate}
              />
            </label>
            <label>
              <small>end date</small>
              <input
                type="date"
                name="endDate"
                onChange={handleChange}
                value={experienceInfo.endDate}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              <small>role</small>
              <input
                type="text"
                name="role"
                onChange={handleChange}
                value={experienceInfo.role}
              />
            </label>
            <label>
              <small>company</small>
              <input
                type="text"
                name="company"
                onChange={handleChange}
                value={experienceInfo.company}
              />
            </label>
            <label>
              <small>description 1</small>
              <textarea
                name="description1"
                onChange={handleChange}
                value={experienceInfo.description1}
              ></textarea>
            </label>
            <label>
              <small>description 2</small>
              <textarea
                name="description2"
                onChange={handleChange}
                value={experienceInfo.description2}
              ></textarea>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

function Experience({ experienceInfo, setExperienceInfo }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [count, setCount] = useState(1);

  const [component, setComponent] = useState([
    <RenderForm
      experienceInfo={experienceInfo}
      handleChange={handleChange}
      count={count}
      key={count}
    />,
  ]);

  const handleRenderForm = () => {
    setCount((c) => c + 1);
    setComponent((prev) => [
      ...prev,
      <RenderForm
        experienceInfo={experienceInfo}
        handleChange={handleChange}
        count={count}
        key={count}
      />,
    ]);
  };

  return (
    <div>
      <div className="section-heading" onClick={toggleVisibility}>
        <h3>Experience</h3>
        <img src={isVisible ? minus : plus} className="plus-symbol" />
      </div>
      <div style={{ display: isVisible ? "block" : "none" }}>
        {component}
        <button onClick={handleRenderForm}>Add Experience</button>
      </div>
    </div>
  );
}

export default Experience;
