import React, { useRef, useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaQuoteLeft,
} from "react-icons/fa";

import { textTestimonials, imageTestimonials } from "../../../constants";

// Merge alternating order
const testimonials = [];
const maxLen = Math.max(textTestimonials.length, imageTestimonials.length);
for (let i = 0; i < maxLen; i++) {
  if (textTestimonials[i]) testimonials.push(textTestimonials[i]);
  if (imageTestimonials[i]) testimonials.push(imageTestimonials[i]);
}

export default function TestimonialCarousel() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active slide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, offsetWidth } = carouselRef.current;
        const index = Math.round(scrollLeft / offsetWidth);
        setActiveIndex(index);
      }
    };
    const node = carouselRef.current;
    node.addEventListener("scroll", handleScroll);
    return () => node.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    if (index < 0) index = testimonials.length - 1;
    if (index >= testimonials.length) index = 0;

    carouselRef.current.scrollTo({
      left: index * carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  // Autoplay every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      scrollToIndex(activeIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="container mx-auto px-4 py-20 relative">
      <h2 className="text-5xl font-bold text-center mb-10 max-w-lg text-center mx-auto">
        Happy Students Say About Our Courses
      </h2>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-2 pb-4 scrollbar-hide"
      >
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] snap-center px-2"
          >
            {/* Text Card */}
            {t.text ? (
              <div className="bg-gray-50 rounded-2xl shadow-md py-6 px-3 h-full flex flex-col justify-between border border-gray-100 relative">
                {/* Responsive Big Quote Icon */}
                <FaQuoteLeft className="absolute text-gray-700 top-4 left-4 text-4xl sm:text-5xl md:text-6xl" />

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 mt-14 text-base sm:text-lg md:text-xl pt-2">
                  {t.text}
                </p>

                {/* Name + Role */}
                <div>
                  <h4 className="font-bold text-lg sm:text-xl md:text-lg text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-gray-500 text-sm sm:text-base">{t.role}</p>
                </div>
              </div>
            ) : (
              // Image Card
              <div className="relative rounded-2xl overflow-hidden shadow-md h-full">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">{t.name}</h4>
                  <p className="text-md">{t.role}</p>
                </div>
                {t.isVideo && (
                  <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg">
                    <FaPlay size={14} />
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => scrollToIndex(activeIndex - 1)}
        className="absolute top-1/2 left-8 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => scrollToIndex(activeIndex + 1)}
        className="absolute top-1/2 right-8 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === activeIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Hide scrollbar cross-browser */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
}
