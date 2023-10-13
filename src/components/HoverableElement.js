import React, { useEffect, useRef } from "react";
import gsap, { Elastic } from "gsap";
const HoverableElement = ({ children }) => {
  const hoverableElement = useRef(null);
  useEffect(() => {
    const element = hoverableElement.current;
    element.addEventListener("mouseleave", onMouseHoverOut);
    element.addEventListener("mouseenter", onMouseHover);
    return () => {
      element.removeEventListener("mouseenter", onMouseHover);
      element.removeEventListener("mouseleave", onMouseHoverOut);
    };
  }, []);
  const onMouseHoverOut = () => {
    gsap.to(".cursor", {
      width: 30,
      height: 30,
      duration: 1,
      ease: Elastic.easeOut,
    });
  };
  const onMouseHover = () => {
    gsap.to(".cursor", {
      width: 70,
      height: 70,
      duration: 1,
      ease: Elastic.easeOut,
    });
  };
  return <div ref={hoverableElement}>{children}</div>;
};

export default HoverableElement;
