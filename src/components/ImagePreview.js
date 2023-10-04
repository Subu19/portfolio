import React from "react";
const ImagePreview = ({ show, url, setShow }) => {
  return (
    <>
      {show ? (
        <>
          <div className="imageView_Containner">
            <img className="imageView" src={url}></img>
            <div className="previewExit" onClick={() => setShow(false)}>
              CLOSE
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ImagePreview;
