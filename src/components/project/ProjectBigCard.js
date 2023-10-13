import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import openTransition from "../functions/openTransition";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { MouseContext } from "../contexts/mouseContext";
import HoverableElement from "../HoverableElement";

const ProjectBigCard = ({ project }) => {
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
              process.env.REACT_APP_API_URL +
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
              process.env.REACT_APP_API_URL +
              project.attributes.CoverImage.data.attributes.url
            }
            className="projectImageCover projectImg"
          ></img>
        </div>
      </HoverableElement>

      <div className="projectTitle">{project.attributes.Name}</div>
      <div className="projectDesc">React Web Application</div>
      <div className="projectCardTags">
        {project.attributes.tags
          ? project.attributes.tags.data.map((tag) => {
              return (
                <div className={"projectTag " + tag.attributes.color}>
                  {tag.attributes.name}
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default ProjectBigCard;
