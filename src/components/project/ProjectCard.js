import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import openTransition from "../functions/openTransition";
import { useContext } from "react";
import { MouseContext } from "../contexts/mouseContext";
import { useHistory } from "react-router-dom";
import HoverableElement from "../HoverableElement";

const ProjectCard = ({ project }) => {
  const projectImageRef = useRef(null);
  const coverRef = useRef(null);
  const mousePosition = useContext(MouseContext);
  const history = useHistory();

  const moveImage = (e) => {
    // console.log(e);
    const centerx =
      projectImageRef.current.getBoundingClientRect().left +
      projectImageRef.current.clientWidth / 2;
    const centery =
      projectImageRef.current.getBoundingClientRect().top +
      projectImageRef.current.clientHeight / 2;
    var xoffset = e.clientX - centerx;
    var yoffset = e.clientY - centery;
    gsap.to(coverRef.current, {
      left: xoffset / 5,
      top: yoffset / 5,
      duration: 0.2,
    });
  };
  const addHoverEffect = (element) => {
    console.log(element);
  };
  return (
    <div className="project">
      <HoverableElement>
        <div
          className="projectImage"
          onClick={() =>
            openTransition(mousePosition).then(() =>
              history.push("/projects/" + project.id)
            )
          }
          ref={projectImageRef}
        >
          <img
            src={
              "http://localhost:1337" +
              project.attributes.MainImage.data.attributes.url
            }
            onClick={() =>
              openTransition(mousePosition).then(() =>
                history.push("/projects/" + project.id)
              )
            }
            className="projectImageMain projectImg"
          ></img>
          <img
            onMouseMove={(e) => moveImage(e)}
            ref={coverRef}
            src={
              "http://localhost:1337" +
              project.attributes.CoverImage.data.attributes.url
            }
            className="projectImageCover projectImg"
          ></img>
        </div>
      </HoverableElement>

      <div className="projectTitle">{project.attributes.Name}</div>
      <div className="projectDesc">React Web Application</div>
    </div>
  );
};

export default ProjectCard;
