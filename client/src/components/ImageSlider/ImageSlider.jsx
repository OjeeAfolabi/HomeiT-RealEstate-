import { useState, useEffect } from "react";
import "./imageslider.scss";
import Intro from "../Textinfo/Intro";

const imageModules = import.meta.glob("./images/*.jpg", { eager: true });

const Images = Object.values(imageModules).map((module) => module.default);

const mobileImageModules = import.meta.glob("./mobileimages/*.jpg", {
  eager: true,
});
const mobileImages = Object.values(mobileImageModules).map(
  (module) => module.default,
);

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main">
      <Intro />
      <div className="slider">
        {Images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex % Images.length ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="mobile-slider">
        {mobileImages.map((image, index) => (
          <div
            key={index}
            className={`mobile-slide ${index === currentIndex % mobileImages.length ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
