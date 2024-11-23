import React, { useState } from "react";
import "../Carousel.css";

const Carousel = () => {
        const items=[
            './dagersito.webp',         
            './dagersito1.webp',
            './dagersito2.webp',
            './dagersito3.webp']
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
      };
    
      return (
        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div className="carousel-item" key={index}>
                <img src={item} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
          <button className="carousel-button prev" onClick={handlePrev}>
            ❮
          </button>
          <button className="carousel-button next" onClick={handleNext}>
            ❯
          </button>
        </div>
      );
    };
    
    export default Carousel;
    