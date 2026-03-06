/* eslint-disable react/jsx-no-comment-textnodes */
import { useState, useEffect } from "react";
import mobileBackground from "../ImageSlider/images/mobileimamages/3mob.jpg";
import "./imageslider.scss";
import Intro from "../Textinfo/Intro";

const imageModules = import.meta.glob("./images/*.jpg", { eager: true });

const Images = Object.values(imageModules).map((module) => module.default);

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main">
      <Intro/>
      <div className="slider">
        {Images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="mobile-background">
        <img src={mobileBackground} alt="Mobile Background" />
      </div>
    </div>
  );
};

export default ImageSlider;
