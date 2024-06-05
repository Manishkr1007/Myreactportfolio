import React, { useState, useEffect } from "react";
import { accenture, python, cyber, ssoc } from "../assets";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    { src: accenture, alt: "Accenture certification" },
    { src: cyber, alt: "Google certificate" },
    { src: python, alt: "Infosis certificate" },
    { src: ssoc, alt: "SSoC certificate" },
    {
      src: "",
      alt: "" }
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  function handlePlay() {
    setIsPaused(!isPaused);
  }

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, images.length]);

  return (
    <div className="mx-5 flex justify-center items-center flex-col object-contain">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`object-cover w-3xl h-auto flex items-center ${
            index === activeIndex
              ? "opacity-100 transition duration-1000 ease-in-out transform scale-100"
              : "hidden max-w-full opacity-40 transition duration-1000 ease-in-out transform scale-95"
          }`}
          onClick={() => handleClick(index)}
        />
      ))}
      <div className="flex mt-4 justify-center items-center">
        <button className="mx-2" onClick={handlePlay}>
          {" "}
          {isPaused ? (
            <BsFillPlayFill className="transition-all duration-200 ease-in-out text-4xl text-gray-500 hover:text-gray-700 dark:hover:text-white" />
          ) : (
            <BsFillPauseFill className="transition-all duration-200 ease-in-out text-4xl text-gray-500 hover:text-gray-700 dark:hover:text-white" />
          )}{" "}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
