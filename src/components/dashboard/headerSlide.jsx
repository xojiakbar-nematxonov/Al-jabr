"use client";

import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const categories = [
  "3-sinf", "4-sinf", "5-sinf", "6-sinf", "7-sinf", "8-sinf", "9-sinf", "10-sinf", "11-sinf",
  "Algebra", "Geometriya", "Statistika", "Data Science", "Olimpiada tayyorlov",
  "AI darslar", "Tanqidiy va mantiqiy fikrlash"
];

const Slider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 300; // Qanchaga surish kerakligini belgilaymiz

      if (direction === "left") {
        container.scrollTo({ left: container.scrollLeft - scrollAmount, behavior: "smooth" });
      } else {
        container.scrollTo({ left: container.scrollLeft + scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative w-full flex items-center justify-between">
      {/* Chapga scroll tugmasi */}
      <button 
        onClick={() => scroll("left")} 
        className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
      >
        <FaAngleLeft size={20} />
      </button>

      {/* Slider qismi */}
      <div 
        ref={scrollRef} 
        className="flex gap-4 overflow-x-auto w-full px-10 py-4 scroll-container"
      >
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="whitespace-nowrap px-4 py-2 text-lg font-medium rounded-lg cursor-pointer "
          >
            {category}
          </div>
        ))}
      </div>

      {/* O‘ngga scroll tugmasi */}
      <button 
        onClick={() => scroll("right")} 
        className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
      >
        <FaAngleRight size={20} />
      </button>

      {/* CSS da scrollbar ni yashiramiz */}
      <style jsx>{`
        .scroll-container {
          scrollbar-width: none; /* Firefox uchun */
          -ms-overflow-style: none; /* IE va Edge uchun */
          scroll-behavior: smooth; /* Smooth scrolling */
        }
        .scroll-container::-webkit-scrollbar {
          display: none; /* Chrome va Safari uchun */
        }
      `}</style>
    </div>
  );
};

const HeaderSlide = () => {
  return (
    <div className="flex justify-center items-center">
      <Slider />
    </div>
  );
};

export default HeaderSlide;
