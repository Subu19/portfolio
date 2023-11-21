import React, { useEffect, useState } from "react";
import cliffSVG from "../assets/cliff.svg";
import cloud from "../assets/cloud.svg";
import cloud1 from "../assets/cloud1.svg";
import cloudfar from "../assets/cloudfar.svg";
import cloudfar1 from "../assets/cloudfar1.svg";
import cloudfarfar from "../assets/cloudfarfar.svg";
import cloudfarfar1 from "../assets/cloudfarfar1.svg";
import eduLocate from "../assets/eduLocate.svg";
import education from "../assets/education.svg";

import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap, { Elastic, Power0 } from "gsap";
import Right from "../components/Right";
import Back from "../components/Back";
import History from "../routes/history";
import "../components/css/education/main.css";
import { Fade } from "react-reveal";
import anime from "animejs";
import EducationText from "../components/others/EducationText";
const Education = () => {
  const [showLocation1, setShowLocation1] = useState(false);
  const [showLocation2, setShowLocation2] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".c_close", {
      scrollTrigger: {
        trigger: ".c_close",
        scroller: ".right",
        scrub: 1,
      },
      y: -300,
    });
    gsap.to(".c_far", {
      scrollTrigger: {
        trigger: ".c_far",
        scroller: ".right",
        scrub: 1,
      },
      y: -200,
    });
    gsap.to(".c_farfar", {
      scrollTrigger: {
        trigger: ".c_farfar",
        scroller: ".right",
        scrub: 1,
      },
      y: -100,
    });

    gsap.to(".cliff", {
      scrollTrigger: {
        scroller: ".right",
        scrub: true,
      },
      y: 100,
      x: 100,
    });
    const animcation = gsap.to(".line", {
      scrollTrigger: {
        trigger: ".lineSVG",
        scroller: ".right",
        start: "top 300px",
        stop: "bottom bottom",
        scrub: 1,
      },
      onUpdate: () => {
        const progress = animcation.progress() * 100;
        if (progress >= 10) {
          setShowLocation1(true);
        } else {
          setShowLocation1(false);
        }
        if (progress >= 30) {
          setShowLocation2(true);
        } else {
          setShowLocation2(false);
        }
      },
      strokeDashoffset: 0,
    });

    // complete: () => {
    gsap.to(".eduTitle", {
      scrollTrigger: {
        scroller: ".right",
        scrub: true,
      },
      y: 400,
    });
    // },
  }, []);
  useEffect(() => {
    if (showLocation1) {
      const path = document.getElementById("lineSVG");
      const card = document.getElementById("eduCard1");
      card.style.right = 0 + "px";
      card.style.top = path.clientHeight * 0.15 - 30 + "px";
      gsap.to("#eduCard1", {
        marginTop: 30,
        duration: 1,
        opacity: 1,
        ease: Elastic.easeOut,
      });
    } else {
      gsap.to("#eduCard1", {
        marginTop: 0,
        duration: 0.2,
        opacity: 0,
        ease: Power0.easeOut,
      });
    }
  }, [showLocation1]);

  useEffect(() => {
    if (showLocation2) {
      const path = document.getElementById("lineSVG");
      const card = document.getElementById("eduCard2");
      card.style.left = 0 + "px";
      card.style.top = path.clientHeight * 0.54 - 30 + "px";
      gsap.to("#eduCard2", {
        marginTop: 30,
        duration: 1,
        opacity: 1,
        ease: Elastic.easeOut,
      });
    } else {
      gsap.to("#eduCard2", {
        marginTop: 0,
        duration: 0.2,
        opacity: 0,
        ease: Power0.easeOut,
      });
    }
  }, [showLocation2]);
  return (
    <>
      <History></History>
      <Back to={"/"}></Back>
      <Fade top>
        <Right>
          <img className="cliff" src={cliffSVG}></img>
          <img id="cloud" className="cloud c_close" src={cloud}></img>
          <img className="cloud c_close" src={cloud1} id="cloud1"></img>
          <img className="cloud c_far" src={cloudfar} id="cloudfarr"></img>
          <img className="cloud c_far" src={cloudfar1} id="cloudfar1"></img>
          <img
            className="cloud c_farfar"
            src={cloudfarfar}
            id="cloudfarfar"
          ></img>
          <img
            className="cloud c_farfar"
            src={cloudfarfar1}
            id="cloudfarfar1"
          ></img>

          <h1 className="eduTitle">
            <EducationText></EducationText>
          </h1>
          <div className="fakeMargin"></div>
          <svg
            viewBox="0 0 1081 1589"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lineSVG"
            id="lineSVG"
          >
            <path
              className="line"
              d="M507.879 1.99998C2435.38 965.5 -1290.62 455 507.879 1587"
              stroke="white"
              stroke-width="4"
              id="linePath"
            />
          </svg>
          <div className="eduContainner">
            <div id="eduCard1" className="eduCard">
              <div className="eduCardDetails ">
                <div className="eduCardTitle">2018-2020</div>
                <div className="eduDesc">
                  Cource: Science
                  <br></br>
                  Major: Physics
                  <br></br>
                  College: New Horizon College <br></br>
                  Address: Butwal, Nepal <br></br>
                </div>
              </div>
              <img className="eduLocate" id="eduLocate1" src={eduLocate}></img>
            </div>

            <div id="eduCard2" className="eduCard eduRightShift">
              <img className="eduLocate" id="eduLocate1" src={eduLocate}></img>
              <div className="eduCardDetails1">
                <div className="eduCardTitle1">2020-Present</div>
                <div className="eduDesc1">
                  Cource: BIT (Bachelors)
                  <br></br>
                  University: Purvanchal University
                  <br></br>
                  College: Kantipur City College <br></br>
                  Address: Putalisadak, Kathmandu <br></br>
                </div>
              </div>
            </div>
          </div>
        </Right>
      </Fade>
    </>
  );
};

export default Education;
