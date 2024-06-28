import React from "react";
import { FaCode, FaGithub } from "react-icons/fa";

function Project({ img, title, text, githubLink, liveLink }) {
  return (
    <div className="project-container-1">
      <div className="image-position">
        <div className="image-project">
          <img src={img} />
        </div>
      </div>
      <div>
        <h5 className="title">{title}</h5>
        <p className="text">{text}</p>

        <div className="btn-container">
          <a
            href={githubLink}
            className="btn-container-project"
            target="_blank"
            rel="noreferrer"
          >
            {githubLink ? (
              <>
                <FaGithub /> <p>Git-Hub</p>
              </>
            ) : (
              <p>Private</p>
            )}
          </a>
          <a
            href={liveLink}
            className="btn-container-project"
            target="_blank"
            rel="noreferrer"
          >
            <FaCode /> Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
