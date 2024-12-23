import React, { useState } from "react";
import "./Slider.css";

function Slider() {
  const slides = [
    "https://via.placeholder.com/1200x500?text=Slide+1", // Random images
    "https://via.placeholder.com/1200x500?text=Slide+2",
    "https://via.placeholder.com/1200x500?text=Slide+3",
    "https://via.placeholder.com/1200x500?text=Slide+4",
    "https://via.placeholder.com/1200x500?text=Slide+5",
  ];

  const categories = [
    {
      img: "https://via.placeholder.com/200x200?text=Kurta+Sets",
      name: "Kurta Sets",
    },
    {
      img: "https://via.placeholder.com/200x200?text=Dresses",
      name: "Dresses",
    },
    {
      img: "https://via.placeholder.com/200x200?text=Suit+Sets",
      name: "Suit Sets",
    },
    {
      img: "https://via.placeholder.com/200x200?text=Co-ord+Sets",
      name: "Co-ord Sets",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div>
      {/* Slider Section */}
      <div className="slider-container">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 2s ease-in-out",
          }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2>Categories</h2>
        <div className="categories-container">
          {categories.map((category, index) => (
            <div className="category" key={index}>
              <div className="circle">
                <img src={category.img} alt={category.name} />
              </div>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
