import React from "react";
import "../css/projectContainner.css";
import ProjectCard from "./ProjectCard";
const ProjectContainner = (props) => {
  const { projects } = props;

  return (
    <div className="projectContainner">
      {projects.map((project) => {
        return <ProjectCard project={project}></ProjectCard>;
      })}
    </div>
  );
};

export default ProjectContainner;
