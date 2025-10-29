import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import "../styles/Common.css";
import { useState } from "react";

function Contact({ contactInfo, setContactInfo }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="section-heading" onClick={toggleVisibility}>
        <h3>Contact</h3>
        <img src={isVisible ? minus : plus} className="plus-symbol" />
      </div>
      <div style={{ display: isVisible ? "block" : "none" }}>
        <form className="contact-form form">
          <div className="form-field">
            <label>
              <small>name</small>
              <input
                type="text"
                name="name"
                value={contactInfo.name}
                onChange={handleChange}
              />
            </label>
            <label >
              <small>phone</small>
              <input
                type="tel"
                name="phone"
                value={contactInfo.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              <small>email</small>
              <input
                type="email"
                name="email"
                value={contactInfo.email}
                onChange={handleChange}
              />
            </label>
            <label>
              <small>website</small>
              <input
                type="website"
                name="website"
                value={contactInfo.website}
                onChange={handleChange}
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
