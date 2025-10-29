import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import "../styles/Common.css";
import { useState } from "react";

function RenderForm({ educationInfo, handleChange, count }) {
  return (
    <div>
      <form className="education-form form">
        <h3 className="field-title">Education {count}</h3>
        <div className="field-container">
          <div className="form-field">
            <label>
              <small>title</small>
              <input
                type="text"
                name="title"
                value={educationInfo.title}
                onChange={handleChange}
              />
            </label>
            <label>
              <small>school/college</small>
              <input
                type="text"
                name="university"
                value={educationInfo.university}
                onChange={handleChange}
              />
            </label>
            <label>
              <small>gpa</small>
              <input
                type="number"
                name="gpa"
                value={educationInfo.gpa}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="date-field">
            
            <label>
              <small>start date</small>
              <input
                type="date"
                name="startDate"
                value={educationInfo.startDate}
                onChange={handleChange}
              />
            </label>
            <label>
              <small>end date</small>
              <input
                type="date"
                name="endDate"
                value={educationInfo.endDate}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
function Education({
  educationInfo1,
  setEducationInfo1,
  educationInfo2,
  setEducationInfo2,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo1((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setEducationInfo2((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="section-heading" onClick={toggleVisibility}>
        <h3>Education</h3>
        <img src={isVisible ? minus : plus} className="plus-symbol" />
      </div>
      <div style={{ display: isVisible ? "block" : "none" }}>
        <RenderForm
          educationInfo={educationInfo1}
          handleChange={handleChange}
          count={1}
        />
        <RenderForm
          educationInfo={educationInfo2}
          handleChange={handleChange2}
          count={2}
        />
      </div>
    </div>
  );
}

export default Education;
