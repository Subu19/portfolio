import React, { useEffect } from "react";
import animenepal from "../assets/Animenepal.svg";
import "./css/project.css";
import { MdDoubleArrow } from "react-icons/md";
import gsap, { Back } from "gsap";

const ProjectVertical = (props) => {
  const { projects } = props;
  useEffect(() => {
    if (projects.length > 0) {
      gsap.to(".v_bar", {
        marginTop: "10px",
        opacity: 1,
        duration: 0.3,
        ease: Back.easeOut,
      });
    }
  }, []);
  return (
    <div className="v_containner">
      {projects.length > 0
        ? projects.map((project) => {
            return (
              <div className="v_bar">
                <img src={project.img} className="v_img"></img>
                <div className="v_title">{project.title}</div>
                <div className="v_desc">{project.desc}</div>
                <MdDoubleArrow className="v_button"></MdDoubleArrow>
              </div>
            );
          })
        : "loading"}
    </div>
  );
};

export default ProjectVertical;
