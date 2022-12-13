import React, { createContext, useContext, useEffect, useState } from "react";
export const MouseContext = createContext(null);

const MouseComponent = (props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const object = {
        x: e.clientX,
        y: e.clientY,
      };
      setMousePosition(object);
    });
    return document.removeEventListener("mousemove", (e) => {
      const object = {
        x: e.clientX,
        y: e.clientY,
      };
      setMousePosition(object);
    });
  }, []);
  return (
    <MouseContext.Provider value={mousePosition}>
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseComponent;
