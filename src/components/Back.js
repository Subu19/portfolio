import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import "./css/main.css";
import gsap, { Elastic } from "gsap";
import { GiFastBackwardButton } from "react-icons/gi";
import HoverableElement from "./HoverableElement";
const Back = (props) => {
  const { to } = props;
  const history = useHistory();
  const handleClick = () => {
    gsap.to(".content", {
      top: "-100%",
      duration: 1,
      onComplete: () => {
        to ? history.push(to) : history.goBack();
      },
    });
  };

  //animate in
  useLayoutEffect(() => {
    gsap.to(".backButton", {
      scale: 1,
      ease: Elastic.easeInOut,
      duration: 1,
      delay: 0,
    });

    return () => {
      gsap.to(".backButton", {
        scale: 0,
        duration: 1,
        delay: 0,
        ease: Elastic.easeInOut,
      });
    };
  }, []);

  return (
    <HoverableElement>
      <div className="backButton" onClick={handleClick}>
        <GiFastBackwardButton></GiFastBackwardButton>
      </div>
    </HoverableElement>
  );
};

export default Back;
