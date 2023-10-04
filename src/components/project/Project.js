import React, { useEffect } from "react";
import "../css/projectPage.css";
import exitButton from "../../assets/exit.svg";
import closeTransition from "../functions/closeTransition";
import { useHistory } from "react-router-dom";
import Blob from "./blob";
import Links from "./links";
import ScrollReveal from "../ScrollReveal";
import { useFetchProject } from "../../hooks/fetchProjects";
import ProjectMedia from "./ProjectMedia";
import ReactMarkdown from "react-markdown";
import Fade from "react-reveal/Fade";
const Project = ({ id }) => {
  const { loadingProject, project } = useFetchProject(id);
  const history = useHistory();
  return (
    <>
      <div className="projectHeader">
        <img
          className="exitButton"
          src={exitButton}
          onClick={() =>
            closeTransition().then(() => history.push("/projects"))
          }
        ></img>
      </div>
      <Fade>
        <Blob></Blob>
      </Fade>
      {loadingProject ? (
        ""
      ) : (
        <>
          <Fade right>
            <div className="projectTitle">{project.attributes.Name}</div>
            <div className="projectIntro">{project.attributes.Description}</div>
            <Links helpers={project.attributes.Helpers}></Links>

            <ProjectMedia media={project.attributes.Media}></ProjectMedia>
            <hr
              style={{
                width: "50%",
                borderStyle: "solid",
                borderColor: "lightgray",
                marginTop: "80px",
              }}
            ></hr>
            <div className="projectDetails">
              <ReactMarkdown>{project.attributes.Details}</ReactMarkdown>
            </div>
          </Fade>
        </>
      )}
    </>
  );
};

export default Project;
