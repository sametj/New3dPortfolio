import React from "react";
import image from "/LinkedIn3.png";
import "./Welcome.css";

function Welcome({ screenRef, setMonitor }) {
  return (
    <section
      className="welcome screen-content"
      onClick={() => setMonitor(screenRef)}
    >
      <div className="hero-text">
        <h4>Hi, I am Adrian Joltea</h4>
        <h1>
          I&apos;m a <span>Front-end Developer</span>
        </h1>
        <p>I create engaging user experiences</p>
      </div>

      <div className="hero-img">
        <img src={image} alt="profile" />
      </div>
    </section>
  );
}

export default Welcome;
