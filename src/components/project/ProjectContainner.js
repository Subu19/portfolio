import React from "react";
import "../css/projectContainner.css";
import ProjectBigCard from "./ProjectBigCard";
import animenepal from "../../assets/Animenepal.png";
import github from "../../assets/github.png";

import HoverableElement from "../HoverableElement";
import ProjectCard from "./ProjectCard";
const ProjectContainner = (props) => {
  const { projects } = props;

  return (
    <div className="projectContainner">
      {projects.map((project) => {
        return <ProjectBigCard project={project}></ProjectBigCard>;
      })}
    </div>
  );
};

export default ProjectContainner;
