import React, { useContext, useEffect, useState } from "react";
import "../components/css/project.css";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import gsap, { Back, Elastic, Power0, Power4 } from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { MdDoubleArrow } from "react-icons/md";
import { MouseContext } from "./contexts/mouseContext";
import openTransition from "./functions/openTransition";
import { useHistory } from "react-router-dom";
import animenepal from "../assets/Animenepal.svg";

const ProjectSlider = (props) => {
  const { projects } = props;
  const [selected, setSelected] = useState(1);
  const mousePosition = useContext(MouseContext);
  const history = useHistory();
  gsap.registerPlugin(ScrollToPlugin);

  useEffect(() => {
    const cardContainner = document.getElementsByClassName("cardContainner")[0];
    const cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      const element = cards[i];
      if (i + 1 == selected) {
        element.classList.add("selectedCard");
        setTimeout(() => {
          gsap.to(cardContainner, {
            scrollTo: {
              x:
                element.offsetLeft -
                cardContainner.clientWidth / 2 +
                element.clientWidth / 2,
            },
            duration: 1,
            ease: Back.easeOut,
            onStart: () => {
              let e = element.getElementsByClassName("cardDesc")[0].children;
              for (let i = 0; i < e.length; i++) {
                const child = e[i];
                child.classList.remove("hide");
              }
            },
          });
        }, 600);
      } else {
        element.classList.remove("selectedCard");
        let e = element.getElementsByClassName("cardDesc")[0].children;
        for (let i = 0; i < e.length; i++) {
          const child = e[i];
          child.classList.add("hide");
        }
      }
    }
  }, [selected]);

  return (
    <>
      <div className="projectSlider">
        <div className="cardContainner">
          <div className="fakeCard"></div>
          {projects.length > 0
            ? projects.map((project) => {
                return (
                  <div className="card hoverable">
                    <img
                      src={
                        process.env.REACT_APP_API_URL +
                        project.attributes.CoverImage.data.attributes.url
                      }
                      className="sliderImg"
                    ></img>

                    <div className="cardDesc">
                      <div className="cardTitle hide">
                        {project.attributes.Name}
                      </div>
                      <div className="cardDetails hide">
                        {project.attributes.Description}
                      </div>
                      <MdDoubleArrow
                        className="cardButton hide hoverable"
                        onClick={() =>
                          openTransition(mousePosition).then(() =>
                            history.push("/projects/" + project.id)
                          )
                        }
                      ></MdDoubleArrow>
                    </div>
                  </div>
                );
              })
            : "loading"}

          <div className="fakeCard"></div>
        </div>

        <div className="slideFade fadeLeft"></div>
        <div className="slideFade fadeRight"></div>
        {selected != 1 ? (
          <IoArrowBackCircle
            className="sButton bleft"
            onClick={() => {
              setSelected(selected - 1);
            }}
          ></IoArrowBackCircle>
        ) : (
          ""
        )}
        {selected != projects.length ? (
          <IoArrowForwardCircle
            className="sButton bright hoverable"
            onClick={() => {
              setSelected(selected + 1);
            }}
          ></IoArrowForwardCircle>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProjectSlider;
