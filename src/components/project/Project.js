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
import splt from "spltjs";
import anime from "animejs";
import gsap, { Power0 } from "gsap";
import ImageSlider from "../others/ImageSlider";
const Project = ({ id }) => {
  const { loadingProject, project } = useFetchProject(id);
  const history = useHistory();
  useEffect(() => {}, []);
  useEffect(() => {
    if (!loadingProject) {
      splt({ reveal: true });
      anime({
        targets: ".reveal",
        translateY: [100, 0],
        delay: anime.stagger(25),
        easing: "cubicBezier(.71,-0.77,.43,1.67)",
      });
    }
  }, [loadingProject]);

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
            <div className="projectTitle splt">{project.attributes.Name}</div>
            <div className="projectIntro">{project.attributes.Description}</div>
            <Links
              helpers={
                project.attributes.Helpers.data
                  ? project.attributes.Helpers
                  : { data: [] }
              }
            ></Links>

            {/* <ProjectMedia media={project.attributes.Media}></ProjectMedia> */}
            <ImageSlider media={project.attributes.Media}></ImageSlider>
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
