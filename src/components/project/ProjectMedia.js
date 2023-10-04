import React, { useState } from "react";
import ImagePreview from "../ImagePreview";
const ProjectMedia = ({ media }) => {
  const [url, setUrl] = useState("");
  const [preview, setPreview] = useState(false);
  const showImage = (url) => {
    setPreview(true);
    setUrl(url);
  };
  return (
    <>
      <div className="media">
        {media.data.map((photo) => {
          return (
            <img
              src={"http://localhost:1337" + photo.attributes.url}
              className="projectMedia"
              style={{
                transform:
                  "rotateZ(" + (Math.floor(Math.random() * 60) - 30) + "deg)",
              }}
              onClick={() =>
                showImage("http://localhost:1337" + photo.attributes.url)
              }
            ></img>
          );
        })}
      </div>
      <ImagePreview
        show={preview}
        url={url}
        setShow={setPreview}
      ></ImagePreview>
    </>
  );
};

export default ProjectMedia;
