import React from "react";
import "./Welcome.css";

function Welcome({ screenRef, setMonitor }) {
  return (
    <section
      className="welcome"
      onClick={() => setMonitor(screenRef)}
      style={{ transform: "scale(5)" }}
    >
      <div className="hero-text">
        <h4>Hi, I am Adrian Joltea</h4>
        <h1>
          I&apos;m a <span>Front-end Developer</span>
        </h1>
        <p>I can provide clean code and pixel perfect design</p>
        <a>My Projects &rarr;</a>
      </div>

      <div className="hero-img"></div>
    </section>
  );
}

export default Welcome;
