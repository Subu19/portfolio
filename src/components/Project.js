import React from "react";
import "./css/projectPage.css";
import exitButton from "../assets/exit.svg";
import closeTransition from "./functions/closeTransition";
import { useHistory } from "react-router-dom";
const Project = () => {
  const history = useHistory();
  return (
    <div className="projectHeader">
      Project
      <img
        className="exitButton"
        src={exitButton}
        onClick={() => closeTransition().then(() => history.push("/projects"))}
      ></img>
    </div>
  );
};

export default Project;
