import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Back from "../components/Back";
import History from "../routes/history";
import Left from "../components/Left";
import Right from "../components/Right";
import gsap from "gsap";
import ProjectSvg from "../components/ProjectSvg";
import "../components/css/project.css";
import ProjectSlider from "../components/ProjectSlider";
import ProjectVertical from "../components/ProjectVertical";
import { GrSort } from "react-icons/gr";
import { TfiLayoutSlider } from "react-icons/tfi";
import animenepal from "../assets/Animenepal.svg";
import k6 from "../assets/k6.svg";
import kurasu from "../assets/kurasu.svg";
import craftnepal from "../assets/craftnepal.png";
import Project from "../components/Project";

const projects = [
  {
    img: animenepal,
    title: "Animenepal",
    desc: "Aliquip tempor occaecat culpa aliqua ex deserunt exercitation. Laboris laboris non minim aliquip et dolor. Qui proident enim fugiat adipisicing irure do sint minim.",
  },
  {
    img: kurasu,
    title: "Kurasu",
    desc: "Duis anim veniam dolor ad ut. Culpa ipsum cillum est laboris ullamco exercitation enim ipsum est nostrud eu tempor. Nulla Lorem ipsum cillum reprehenderit nulla exercitation. Non et irure exercitation commodo elit. Quis qui ipsum aliquip pariatur sunt cupidatat. Ea laboris reprehenderit eu commodo ipsum non dolore Lorem exercitation ea. Labore amet eu dolor ipsum nulla laborum consectetur cupidatat pariatur sunt voluptate.",
  },
  {
    img: craftnepal,
    title: "CraftNepal",
    desc: "Sit sit Lorem qui incididunt proident nostrud adipisicing. Est est amet qui ullamco in consectetur dolor velit deserunt esse cupidatat incididunt. Cupidatat exercitation eu Lorem non ipsum consectetur velit in qui minim elit. Cupidatat consequat sint et esse commodo aute exercitation. Non excepteur Lorem dolore in irure eu quis culpa consequat.",
  },
  {
    img: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png",
    title: "To The Moon",
    desc: "Aliqua fugiat fugiat dolor fugiat magna nulla aute eiusmod dolore dolore aliquip. Eiusmod duis laboris consectetur laborum amet cillum proident. Magna aliqua consectetur duis sint aliqua officia consectetur ea consequat adipisicing nostrud tempor. Tempor qui aliqua id cillum incididunt irure velit aute incididunt dolor irure sunt occaecat. Irure nulla cupidatat esse enim in aliquip ut occaecat consequat occaecat cupidatat ea. Sint ea amet consequat commodo pariatur consequat consectetur.",
  },
  {
    img: k6,
    title: "K6 Pizza And Bars",
    desc: "Exercitation culpa occaecat eu exercitation excepteur laborum anim Lorem reprehenderit ad ipsum tempor. Duis officia ut consectetur qui velit mollit duis id et ut et laborum. Anim proident reprehenderit pariatur et esse ex incididunt consequat. Dolor ut sit officia ea excepteur reprehenderit exercitation sit. Elit aute exercitation non ad.",
  },
];

const Projects = () => {
  const { id } = useParams();
  const [view, setView] = useState(1);
  useEffect(() => {
    gsap.to(".content", {
      top: "0px",
      duration: 1,
    });
    document.getElementsByClassName("_main")[0].style.visibility = "hidden";
  }, [id]);
  return (
    <>
      {id ? (
        <>
          <History></History>
          <Back to={"/projects"}></Back>
          <Right>
            <Project></Project>
          </Right>
        </>
      ) : (
        <>
          <History></History>
          <Back to={"/"}></Back>
          <Right>
            <ProjectSvg></ProjectSvg>
            <hr></hr>
            <div className="sorts">
              <TfiLayoutSlider
                className={view == 1 ? "sortIcons sortIconS" : "sortIcons"}
                onClick={() => setView(1)}
              ></TfiLayoutSlider>
              <GrSort
                className={view == 2 ? "sortIcons sortIconS" : "sortIcons"}
                onClick={() => setView(2)}
              ></GrSort>
            </div>

            {view == 1 ? (
              <ProjectSlider projects={projects}></ProjectSlider>
            ) : view == 2 ? (
              <ProjectVertical projects={projects}></ProjectVertical>
            ) : (
              ""
            )}
          </Right>
        </>
      )}
    </>
  );
};

export default Projects;
