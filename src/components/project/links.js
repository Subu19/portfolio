import React from "react";
import ScrollReveal from "../ScrollReveal";

const Links = ({ helpers }) => {
  return (
    <div className="projectLinks">
      <div className="projectSources projectLink">
        <div className="projectSource">GitHub</div>
        <div className="projectSource">Website</div>
      </div>
      <div className="projectHelpers projectLink">
        {helpers.data.map((helper) => {
          return (
            <img
              src={
                process.env.REACT_APP_API_URL +
                helper.attributes.Image.data.attributes.url
              }
              className="projectHelper"
            ></img>
            // <h1>hi</h1>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
