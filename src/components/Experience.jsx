import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1>Experience</h1>
      <div className="experience-container">
        <div className="experience-column">
          <div className="experience-item">
            <h3>Experience 1</h3>
            <p>Job Title</p>
            <p>asdasd</p>
            <span className="dot"></span>
          </div>
          <div className="experience-item">
            <h3>Experience 2</h3>
            <p>Job Title</p>
            <p>asdasd</p>
            <span className="dot"></span>
          </div>
        </div>
        <div className="experience-column">
          <div className="experience-item">
            <h3>Experience 3</h3>
            <p>Job Title</p>
            <p>asdasd</p>
            <span className="dot"></span>
          </div>
          <div className="experience-item">
            <h3>Experience 4</h3>
            <p>Job Title</p>
            <p>asdasd</p>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
