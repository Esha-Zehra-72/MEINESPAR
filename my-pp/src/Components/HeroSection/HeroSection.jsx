import React, { useState } from "react";
import "./HeroSection.css";
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

// Example dynamic data for the carousel
const carouselData = [
  {
    bgImage: img1,
    offer: "Up to 13% Offer",
    percentage: 30,
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    bgImage: img2,
    offer: "Up to 15% Offer",
    percentage: 40,
    description: "Text of the printing and typesetting industry.",
  },
  {
    bgImage: img3,
    offer: "Up to 20% Offer",
    percentage: 50,
    description: "Printing industry has been the industry's standard.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle carousel slide change (Next)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  // Handle carousel slide change (Previous)
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  const currentSlide = carouselData[currentIndex];

  return (
    <>
      <div className="container">
        <div className="position-relative">
          <div className="d-flex transition">
            <div
              className="bg"
              style={{
                backgroundImage: `url(${currentSlide.bgImage})`,
              }}
            >
              <a href="" className="carousel-img">
                <img src={currentSlide.bgImage} alt="carousel" />
              </a>
            </div>
            <div className="content">
              <div className="content-description">
                <p className="header">{currentSlide.offer}</p>
                <h1 className="percentage">{currentSlide.percentage}</h1>
                <p className="description">{currentSlide.description}</p>
              </div>
            </div>
          </div>
          <div className="carousel-controls">
            <div variant="primary" onClick={handlePrev} className="previous">
            <GrNext />
            </div>
            <div onClick={handleNext} className="next">
            <GrPrevious />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
