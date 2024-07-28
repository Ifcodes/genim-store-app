"use client";
import React, { TouchEvent, useEffect, useRef, useState } from "react";
import "./swiper-styles.scss";
import { Button } from "../../atoms/button";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

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
              <div
                key={image}
                className={`container image-${index - currentIndex}  `}
              >
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
      <div className="flex justify-between items-center px-8 ">
        <div className="flex space-x-8 items-center">
          <button
            className="icon-btn"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <PiCaretLeftLight size={32} />
          </button>
          <button
            className="icon-btn"
            onClick={handleNext}
            disabled={currentIndex >= images.length - visibleImagesCount}
          >
            <PiCaretRightLight size={32} />
          </button>
        </div>
        <div className="flex space-x-4 items-center">
          <Button
            buttonType="secondary"
            otherClasses="w-[8rem] text-center justify-center uppercase rounded-full"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            Look 01
          </Button>
          <Button
            // otherClasses=""
            onClick={handleNext}
            disabled={currentIndex >= images.length - visibleImagesCount}
          >
            Shop Look
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
