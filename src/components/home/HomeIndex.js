import React, { useLayoutEffect, useRef } from "react";
import me from "../../assets/me.jpg";
import { useEffect } from "react";
import gsap, { Power4, Power0, Elastic, Power1, Power2 } from "gsap";
import HoverableElement from "../HoverableElement";
import DiscordIcon from "../others/DiscordIcon";

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
        maxHeight: 100,
        ease: Power1.easeOut,
      });

      gsap.to(".myDesc", {
        marginTop: "20px",
        opacity: 1,
        duration: 0.5,
        delay: 2,
        ease: Power2.easeOut,
      });
    }, containerRef);
    return () => ctx.revert;
  }, []);
  const toggleLinks = () => {
    const links = document.getElementsByClassName("linkContainner")[0];
    links.classList.toggle("showLinks");
  };
  return (
    <div className="HomeIndex" ref={containerRef}>
      <HoverableElement>
        <div className="linkContainner" onClick={() => toggleLinks()}>
          <div className="myLinks myLink1">
            <i class="fab fa-discord">
              <DiscordIcon></DiscordIcon>
            </i>
          </div>
          <div className="myLinks myLink2">
            <i class="fa fa-linkedin-square"></i>
          </div>
          <div className="myLinks myLink3">
            <i class="fa fa-facebook-square"></i>
          </div>
          <div className="myLinks myLink4">
            <i class="fa fa-instagram"></i>
          </div>
          <div className="myLinks myLink5">
            <i class="fa fa-twitter-square"></i>
          </div>
          <div className="profilePicContainner">
            Touch Me <br></br>
            UWU
            <img className="profilePic" src={me}></img>
          </div>
        </div>
      </HoverableElement>

      <HoverableElement className="myname">
        <div className="realname">Subash Acharya</div>
        <div className="nickname">SUBU</div>
      </HoverableElement>
      <div className="myDesc">
        Experienced Web Developer and Java Enthusiast. From Interactive Websites
        to Game Mods, I Bring Ideas to Life. Proficient in C, C++, Java, and
        JavaScript for Diverse Projects.
      </div>
    </div>
  );
};

export default HomeIndex;
