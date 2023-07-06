import React from "react";
import "./cardStyles.css";
import Menu from "./menu";

export default function DescribeCourseCard() {
  return (
    <div className="descCourseParent">
      <Menu />
        <div className="content-section">
          <div className="left-section">
            <div className="header">
              <h2>Describe your course</h2>
              <p>
                    In this step, you will need to enter a brief description of the
                    course you want to create, then we can suggest you a tailored
                    course contents.
              </p>
            </div>
            <br />
            <div className="form">
              <form action="create/step1" method="post">
                <div className="form-line">
                  <label htmlFor="language">Course Language</label>
                  <select id="language">
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                  </select>
                </div>
                <br />
                <div className="form-line">
                  <label htmlFor="category">Category</label>
                  <select id="category">
                    <option value="DigitalDesign">Digital Design</option>
                    <option value="technology">technology</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>
                <br />
                <div className="form-line">
                  <label htmlFor="course-audience">This course is for</label>
                  <input
                    type="text"
                    id="course-audience"
                    name="course-audience"
                    placeholder="High School Students"
                  />
                </div>
                <br />
                <div className="form-line">
                  <label htmlFor="tone">Tone</label>
                  <select id="tone">
                    <option value="funny">funny</option>
                    <option value="harsh">harsh</option>
                    <option value="sad">sad</option>
                  </select>
                </div>
                <br />
                <div className="form-line">
                  <label htmlFor="courseHours">Course Hours</label>
                  <input
                    type="text"
                    id="courseHours"
                    name="courseHours"
                    placeholder="1 hour"
                  />
                </div>
                <br />
                <div className="form-line">
                  <label htmlFor="lessonDuration">Duration</label>
                  <input
                    type="text"
                    id="lessonDuration"
                    name="lessonDuration"
                    placeholder="5 minutes"
                  />
                </div>
                <br />
                <div className="form-line">
                  <label htmlFor="course-desc">Describe your course (2500)</label>
                  <textarea
                    id="course-desc"
                    name="course-desc"
                    placeholder="A UI design course with Figma for high-school students."
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
                <br />
                <button className="generateOutlineBtn">Generate Outline</button>
              </form>
            </div>
          </div>
          <div className="right-section">
            <div className="right-content">
              <h2>Course Title</h2>
              <p>Finish your course information
              then generate course outline</p>
            </div>
          </div>
        </div>
    </div>
  );
}
