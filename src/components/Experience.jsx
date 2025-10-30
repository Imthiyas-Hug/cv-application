import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import "../styles/Common.css";
import { useState } from "react";

function RenderForm({ experienceInfo, handleChange }) {
  if (Array.isArray(experienceInfo)) {
    return experienceInfo.map((exp, index) => (
      <div key={index}>
        <form className="experience-form form">
          <h3 className="field-title">Experience {index + 1}</h3>
          <div className="field-container">
            <div className="date-field">
              <label>
                <small>start date</small>
                <input
                  type="date"
                  name="startDate"
                  onChange={(e) => handleChange(e, index)}
                  value={exp.startDate}
                />
              </label>
              <label>
                <small>end date</small>
                <input
                  type="date"
                  name="endDate"
                  onChange={(e) => handleChange(e, index)}
                  value={exp.endDate}
                />
              </label>
            </div>
            <div className="form-field">
              <label>
                <small>role</small>
                <input
                  type="text"
                  name="role"
                  onChange={(e) => handleChange(e, index)}
                  value={exp.role}
                />
              </label>
              <label>
                <small>company</small>
                <input
                  type="text"
                  name="company"
                  onChange={(e) => handleChange(e, index)}
                  value={exp.company}
                />
              </label>
              <label>
                <small>description 1</small>
                <textarea
                  name="description1"
                  onChange={(e) => handleChange(e, index)}
                  value={exp.description1}
                ></textarea>
              </label>
              <label>
                <small>description 2</small>
                <textarea
                  name="description2"
                  onChange={(e) => handleChange(e, index)}
                  value={exp.description2}
                ></textarea>
              </label>
            </div>
          </div>
        </form>
      </div>
    ));
  }
}

function Experience({ experienceInfo, setExperienceInfo }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setExperienceInfo((prev) =>
      prev.map((exp, i) => (i === index ? { ...exp, [name]: value } : exp))
    );
  };

  const handleRenderForm = () => {
    setExperienceInfo((prev) => [
      ...prev,
      {
        startDate: "",
        endDate: "",
        role: "",
        company: "",
        description1: "",
        description2: "",
      },
    ]);
  };

  return (
    <div>
      <div className="section-heading" onClick={toggleVisibility}>
        <h3>Experience</h3>
        <img src={isVisible ? minus : plus} className="plus-symbol" />
      </div>
      <div style={{ display: isVisible ? "block" : "none" }}>
         <RenderForm
            experienceInfo={experienceInfo}
            handleChange={handleChange}
          />
        <div className="add-btn-div"><button onClick={handleRenderForm} className="add-btn">Add Experience</button></div>
      </div>

    </div>
  );
}

export default Experience;
