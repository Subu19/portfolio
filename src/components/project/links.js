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
              src={"http://localhost:1337" + helper.attributes.url}
              className="projectHelper"
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
