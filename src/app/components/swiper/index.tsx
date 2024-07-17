"use client";
import React, { TouchEvent, useRef, useState } from "react";
import "./swiper-styles.css";

const Swiper = ({ images }: { images: Array<string> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleImagesCount = 5;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => {
    if (currentIndex < images.length - visibleImagesCount) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsTransitioning(false);
      }, 700); // Match the CSS transition duration
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsTransitioning(false);
      }, 700); // Match the CSS transition duration
    }
  };

  const getVisibleImages = () => {
    return images.slice(currentIndex, currentIndex + visibleImagesCount);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      handleNext();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swiped right
      handlePrev();
    }
  };

  console.log({ currentIndex, images, isTransitioning });

  return (
    <div
      className="image-slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        Left
      </button>
      <div className="images-container">
        {getVisibleImages().map((image, index) => (
          <img
            key={index}
            src={image}
            className={`image image-${index} ${
              isTransitioning ? "transitioning" : ""
            }`}
            alt={`Image ${index}`}
            draggable={false}
          />
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={currentIndex >= images.length - visibleImagesCount}
      >
        Right
      </button>
    </div>
  );
};

export default Swiper;
