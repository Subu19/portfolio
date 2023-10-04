import gsap from "gsap";

const openTransition = (mousePosition) => {
  return new Promise((resolve, reject) => {
    // gsap.to(".content", {
    //   top: "-100%",
    //   duration: 1,
    // });
    const element = document.getElementsByClassName("_main")[0];
    const contentE = document.getElementsByClassName("right")[0];
    // element.classList.add("projectTransition");
    element.style.visibility = "visible";
    element.style.right = window.innerWidth - mousePosition.x + "px";
    element.style.top = mousePosition.y + "px";
    element.style.backgroundColor = "white";
    element.style.zIndex = "2";
    element.style.height = "0px";
    element.style.width = "0px";
    element.style.borderRadius = "50%";
    gsap.to(element, {
      height: contentE.clientHeight,
      width: contentE.clientWidth + 100,
      top: 0,
      right: 0,
      left: null,
      borderRadius: "0%",
      duration: 0.5,
      onComplete: () => {
        resolve("success");
      },
    });
  });
};

export default openTransition;
