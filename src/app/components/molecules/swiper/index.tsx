"use client";
import React, { TouchEvent, useEffect, useRef, useState } from "react";
import "./swiper-styles.css";
import { Button } from "../../atoms/button";

const Swiper = ({ images }: { images: Array<string> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex = useRef<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleImagesCount = 5;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    previousIndex.current = currentIndex;
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < images.length - visibleImagesCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
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

  return (
    <div
      className="image-slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Button onClick={handlePrev} disabled={currentIndex === 0}>
        Left
      </Button>
      <div className="img-wrapper">
        <div
          className="images-container"
          style={{
            translate: `${-20 * currentIndex}%`,
          }}
        >
          {images.map((image, index) => {
            // console.log({ currentIndexCopy });
            return (
              <div className={`container image-${index - currentIndex}  `}>
                <img
                  key={index}
                  src={image}
                  className={`image `}
                  alt={`Image ${index}`}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Button
        onClick={handleNext}
        disabled={currentIndex >= images.length - visibleImagesCount}
      >
        Right
      </Button>
    </div>
  );
};

export default Swiper;
