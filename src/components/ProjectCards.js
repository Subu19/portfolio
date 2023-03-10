import React, { useEffect } from "react";
import "../components/css/project.css";
import gsap, { Back, Elastic, Power0, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";
gsap.registerPlugin(ScrollTrigger);
const ProjectCards = () => {
  return (
    <div className="pCard_containner">
      <ScrollReveal className="pCard">test</ScrollReveal>
      <ScrollReveal className="pCard">test</ScrollReveal>
      <ScrollReveal className="pCard">test</ScrollReveal>
      <ScrollReveal className="pCard">test</ScrollReveal>
      <ScrollReveal className="pCard">test</ScrollReveal>
      <ScrollReveal className="pCard">test</ScrollReveal>
    </div>
  );
};

export default ProjectCards;
