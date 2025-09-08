import React from "react";
import {
  mentorsText,
  DetailedMentorsData,
} from "../../constants/mentors_constants";
import { heroData } from "../../constants/hero_constants";

export default function Mentors() {
  return (
    <section className="py-20 bg-gray-100">
      <header className="container mx-auto px-4 md:pb-10 text-center">
        <h1 className="text-3xl md:text-5xl max-w-3xl mx-auto font-bold mb-4">
          {mentorsText.header.title}
        </h1>
        <p className="max-w-md md:max-w-xl mx-auto">
          {mentorsText.header.subtitle}
        </p>
      </header>

      <div className="container mx-auto px-4 mb-10 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {DetailedMentorsData.map((mentor) => (
          <div
            key={mentor.id}
            className="group flex flex-col items-center p-10 bg-white rounded-2xl hover:bg-gradient-to-r hover:from-pink-900 hover:to-yellow-500 hover:shadow-2xl transition-all duration-300 text-center"
          >
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
              src={mentor.image}
              alt={mentor.name}
            />
            <div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 group-hover:text-white">
                {mentor.name}
              </h5>
              <span className="text-sm text-gray-500 group-hover:text-white">
                {mentor.position}
              </span>
            </div>
            <div className="flex mt-4 md:mt-6 gap-2 text-[12px] justify-center">
              {mentor.courses.map((course, index) => (
                <a
                  href="#"
                  key={index}
                  className="py-2 px-3 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                >
                  {course}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="group flex items-center gap-3 rounded-full border border-gray-600 font-medium pl-4 pr-1 py-1 bg-emerald-600 hover:bg-gray-900 text-white transition-colors mx-auto">
        <span>View Details</span>
        <span className="flex items-center justify-center border border-gray-600 bg-gray-100 w-10 h-10 group-hover:bg-white rounded-full -rotate-45 transition group-hover:rotate-0 duration-600">
          <img
            src={heroData.icons.arrowRight}
            alt="arrow"
            className="w-5 h-5"
          />
        </span>
      </button>
    </section>
  );
}
