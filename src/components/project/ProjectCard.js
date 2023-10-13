import React from "react";
import HoverableElement from "../HoverableElement";
import github from "../../assets/github.png";
import openTransition from "../functions/openTransition";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { MouseContext } from "../contexts/mouseContext";
const ProjectCard = ({ project }) => {
  const history = useHistory();
  const mousePosition = useContext(MouseContext);
  return (
    <HoverableElement
      className="projectCard"
      style={{
        backgroundColor: "" + project.attributes.PrimaryColor || "black",
      }}
      onClick={() =>
        openTransition(mousePosition).then(() =>
          history.push("/projects/" + project.id)
        )
      }
    >
      <div>
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
            <div className="projectCardTitle">{project.attributes.Name}</div>
            <div className="projectCardDetails">
              {project.attributes.Description} dwada wdaw daw dawd awdaw dawd
              awdwa dawd awdaw dad aw dawd awdaw daw dawda wdaw dad awdaw dawd
              awd awdawd adawd awda w
            </div>
            <div className="projectCardTags">
              {project.attributes.tags
                ? project.attributes.tags.data.map((tag) => {
                    return (
                      <div className={"projectTag " + tag.attributes.color}>
                        {tag.attributes.name}
                      </div>
                    );
                  })
                : "hmm"}
            </div>
          </div>
        </div>
        <img
          src={
            process.env.REACT_APP_API_URL +
            project.attributes.MainImage.data.attributes.url
          }
          className="projectCardImg"
        />
      </div>
    </HoverableElement>
  );
};

export default ProjectCard;
