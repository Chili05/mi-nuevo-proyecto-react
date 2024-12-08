import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Slider.css';  

import slide1 from '../assets/images/slider-image1.jpg';
import slide2 from '../assets/images/slider-image2.jpg';
import slide3 from '../assets/images/slider-image3.jpg';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [slide1, slide2, slide3];


  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);  

    return () => clearInterval(intervalId);
  }, [nextSlide]);  

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div className="slide">
          <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default Slider;
