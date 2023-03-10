import React, { useEffect, useRef } from "react";
import sr from "scrollreveal";
const ScrollReveal = ({ children, style, className }) => {
  const domref = useRef(null);
  useEffect(() => {
    if (domref.current) {
      sr().reveal(domref.current, {
        reset: true,
        delay: 100,
        container: ".right",
        easing: "ease-out",
        distance: "100px",
        origin: "bottom",
      });
    }
  }, []);
  return (
    <div ref={domref} className={className} style={style}>
      {children}
    </div>
  );
};

export default ScrollReveal;
