import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Back from "../components/Back";
import History from "../routes/history";
import Right from "../components/Right";
import ProjectSvg from "../components/ProjectSvg";
import "../components/css/project.css";
import Project from "../components/project/Project";
import { useFetchProjects } from "../hooks/fetchProjects";
import ProjectContainner from "../components/project/ProjectContainner";
import { Fade } from "react-reveal";
import ProjectCard from "../components/project/ProjectCard";

const Projects = () => {
  const { id } = useParams();
  const [view, setView] = useState(1);
  const [onGoingAnimation, setOnGoingAnimation] = useState(false);
  const { loadingProject, projects } = useFetchProjects();
  useEffect(() => {
    // gsap.to(".content", {
    //   top: "0px",
    //   duration: 1,
    //   onStart: () => {
    //     setOnGoingAnimation(true);
    //   },
    //   onComplete: () => {
    //     setOnGoingAnimation(false);
    //   },
    // });
    document.getElementsByClassName("_main")[0].style.visibility = "hidden";
  }, [id]);

  return (
    <>
      {id ? (
        <>
          <History></History>
          <Back to={"/"}></Back>
          <Right>
            <Project id={id}></Project>
          </Right>
        </>
      ) : (
        <>
          <History></History>
          <Back to={"/"}></Back>

          <Right>
            <Fade right>
              <ProjectSvg></ProjectSvg>
              <hr></hr>
              {loadingProject ? (
                <div>loading...</div>
              ) : (
                <>
                  {projects ? (
                    // <>
                    //   <ProjectSlider
                    //     projects={projects.filter(
                    //       (project) => project.attributes.Slider == true
                    //     )}
                    //   ></ProjectSlider>
                    //   {!onGoingAnimation ? <ProjectCards></ProjectCards> : ""}
                    // </>
                    <>
                      <ProjectContainner
                        projects={projects.filter(
                          (project) => project.attributes.Big == true
                        )}
                      ></ProjectContainner>

                      <h1 className="projectPageSubtitle">
                        College and Side Projects
                      </h1>

                      <div className="projectCards">
                        {projects
                          .filter((project) => project.attributes.Big == false)
                          .map((project) => {
                            return (
                              <ProjectCard project={project}></ProjectCard>
                            );
                          })}
                      </div>
                    </>
                  ) : (
                    "error.."
                  )}
                </>
              )}
            </Fade>
          </Right>
        </>
      )}
    </>
  );
};

export default Projects;
