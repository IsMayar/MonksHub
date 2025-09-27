import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { GraduatesData } from "../../constants/index";

export default function SuccessfulGraduates() {
  // State for sliding index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use GraduateData instead of undefined mentors
  const scrollMentors = [...GraduatesData, ...GraduatesData];

  // Slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GraduatesData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden py-10">
      <div
        className="flex gap-6 transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 19}rem)`, // w-72 + gap-6 = 18 + 1 rem approx
        }}
      >
        {scrollMentors.map((mentor, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-lg w-72 h-96 flex-shrink-0"
          >
            <img
              src={mentor.img}
              alt={mentor.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-between items-center">
              <div className="text-white">
                <h3 className="font-bold">{mentor.name}</h3>
                <p className="text-sm">{mentor.position}</p>
              </div>
              <button className="bg-white p-3 rounded-full text-black hover:bg-gray-200 transition">
                <FaPlay />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
