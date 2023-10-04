import React, { useLayoutEffect, useRef } from "react";
import me from "../../assets/me.jpg";
import { useEffect } from "react";
import gsap, { Power4, Power0 } from "gsap";
const HomeIndex = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Our animations can use selector text like ".box"
      // this will only select '.box' elements that are children of the component
      gsap.to(".profilePicContainner", {
        top: -50,
        opacity: 1,
        duration: 0.5,
        delay: 2,
        ease: Power0.easeOut,
      });
      gsap.to(".myname", {
        marginTop: "10px",
        opacity: 1,
        duration: 0.5,
        delay: 2,
        ease: Power0.easeOut,
      });
      gsap.to(".myDesc", {
        marginTop: "20px",
        opacity: 1,
        duration: 0.5,
        delay: 2,
        ease: Power0.easeOut,
      });
    }, containerRef);
    return () => ctx.revert;
  }, []);

  return (
    <div className="HomeIndex" ref={containerRef}>
      <div className="profilePicContainner">
        {"☆*: .｡. o(≧▽≦)o .｡.:*☆"}
        <br /> Dont touch
        <img className="profilePic" src={me}></img>
      </div>
      <div className="myname">Subash Acharya</div>
      <div className="myDesc">
        Experienced Web Developer and Java Enthusiast. From Interactive Websites
        to Game Mods, I Bring Ideas to Life. Proficient in C, C++, Java, and
        JavaScript for Diverse Projects.
      </div>
    </div>
  );
};

export default HomeIndex;
