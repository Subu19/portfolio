import React, { useEffect, useRef } from "react";
import "../css/others/slider.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ScrollContainer from "react-indiana-drag-scroll";
import animenepal from "../../assets/Animenepal.png";
import "react-photo-view/dist/react-photo-view.css";

const ImageSlider = ({ media }) => {
  const sliderref = useRef(null);
  const resize = () => {
    if (!sliderref.current) return;
    const slider = sliderref.current.getElement();
    const sliderBound = slider.getBoundingClientRect();
    const children = slider.getElementsByClassName("sliderItem");
    for (const child of children) {
      const bond = child.getBoundingClientRect();
      const distance =
        sliderBound.left -
        bond.left -
        child.clientWidth / 2 +
        slider.clientWidth / 2;
      if (distance > 0) {
        if (Math.abs(distance) < 200) {
          child.classList.remove("shrinkItem1");
          child.classList.remove("shrinkItem2");
        } else if (Math.abs(distance) < 500) {
          child.classList.add("shrinkItem1");
          child.classList.remove("shrinkItem2");
        } else {
          child.classList.remove("shrinkItem1");
          child.classList.add("shrinkItem2");
        }
      } else {
        if (Math.abs(distance) < 200) {
          child.classList.remove("shrinkItem3");
          child.classList.remove("shrinkItem4");
        } else if (Math.abs(distance) < 500) {
          child.classList.add("shrinkItem3");
          child.classList.remove("shrinkItem4");
        } else {
          child.classList.remove("shrinkItem3");
          child.classList.add("shrinkItem4");
        }
      }
    }
  };

  useEffect(() => {
    if (!sliderref.current) return;
    const slider = sliderref.current.getElement();
    slider.addEventListener("scroll", resize);
    setTimeout(() => {
      resize();
    }, 1000);
    return () => {
      slider.removeEventListener("scroll", resize);
    };
  }, [sliderref.current]);

  return (
    <div className="seasonContainner">
      <ScrollContainer
        className="seasonSliderContainner"
        id={"slider"}
        ref={sliderref}
      >
        <div className=" fakeItem"></div>
        <PhotoProvider>
          {media.data.map((img) => {
            return (
              <PhotoView src={"http://localhost:1337" + img.attributes.url}>
                <img
                  className={"sliderItem"}
                  src={"http://localhost:1337" + img.attributes.url}
                ></img>
              </PhotoView>
            );
          })}
        </PhotoProvider>
        <div className=" fakeItem"></div>
      </ScrollContainer>
    </div>
  );
};

export default ImageSlider;
