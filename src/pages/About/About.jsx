import React from "react";
import "./About.css";
import * as Icons from "./svgs";

function About({ screenRef, setMonitor }) {
  return (
    <section
      className="about screen-content"
      onClick={() => setMonitor(screenRef)}
    >
      <div className="about-container">
        <div className="about-skills">
          <ul className="icon-list">
            {Object.keys(Icons).map((iconKey) => (
              <li className="icon" key={iconKey}>
                {React.createElement(Icons[iconKey])}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-text">
          <h4 className="title-h4">About me</h4>
          <h2 className="title-h2">
            Adrian <span className="text-color">Joltea</span>
          </h2>
          <p>
            Hi, I&apos;m a passionate and detail-oriented junior React developer
            with a strong foundation in front-end web development. My journey
            into the world of coding began with a fascination for creating
            engaging and interactive user interfaces.
          </p>
          <p>
            I am enthusiastic about staying up-to-date with the latest industry
            trends and technologies. Eager to contribute my skills and learn
            from experienced developers to grow as a professional in the
            ever-evolving field of web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
