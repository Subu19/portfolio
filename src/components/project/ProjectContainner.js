import React from "react";
import "../css/projectContainner.css";
import ProjectCard from "./ProjectCard";
import animenepal from "../../assets/Animenepal.png";
import github from "../../assets/github.png";

import HoverableElement from "../HoverableElement";
const ProjectContainner = (props) => {
  const { projects } = props;

  return (
    <div className="projectContainner">
      {projects.map((project) => {
        return <ProjectCard project={project}></ProjectCard>;
      })}
      <div className="projectCards">
        <HoverableElement>
          <div className="projectCard">
            <div className="projectCardContainner">
              <img src={github} className="github" />

              <svg viewBox="0 0 405 398" fill="none" className="cardWaveSvg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  className="cardWave"
                  d="M0 84.9999C14.5 97.1666 60.1174 114.854 94.5 73.9999C136.846 23.6834 212.614 48.3193 246.63 59.3795L247 59.4999C281.833 70.4999 338.5 82 367.5 63.5C396.027 45.3015 403.833 12.8333 404 0.5V112.069C404.648 113.926 405 115.922 405 118V370C405 379.941 396.941 388 387 388H18C8.05887 388 0 379.941 0 370V126.5V118V84.9999Z"
                  fill="#D9D9D9"
                />
              </svg>
              <div className="projectCardDesc">
                <div className="projectCardTitle">Project 1</div>
                <div className="projectCardDetails">
                  Non sint reprehenderit irure quis ex consectetur magna nostrud
                  ipsum non.
                </div>
                <div className="projectCardTags">
                  <div className="projectTag purple">React</div>
                  <div className="projectTag blue">Web Development</div>
                </div>
              </div>
            </div>
            <img src={animenepal} className="projectCardImg" />
          </div>
        </HoverableElement>
      </div>
    </div>
  );
};

export default ProjectContainner;
