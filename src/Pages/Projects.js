import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Back from "../components/Back";
import History from "../routes/history";
import Left from "../components/Left";
import Right from "../components/Right";
import gsap from "gsap";
import ProjectSvg from "../components/ProjectSvg";
// import "../components/css/project.css";
import ProjectSlider from "../components/ProjectSlider";
import ProjectVertical from "../components/ProjectVertical";
import { GrSort } from "react-icons/gr";
import { TfiLayoutSlider } from "react-icons/tfi";
import animenepal from "../assets/Animenepal.svg";
import k6 from "../assets/k6.svg";
import kurasu from "../assets/kurasu.svg";
import craftnepal from "../assets/craftnepal.png";
import Project from "../components/project/Project";
import ProjectCards from "../components/ProjectCards";
import { useFetchProjects } from "../hooks/fetchProjects";
import ProjectContainner from "../components/project/ProjectContainner";
import { Fade } from "react-reveal";

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
                    <ProjectContainner projects={projects}></ProjectContainner>
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
