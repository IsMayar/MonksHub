import React from "react";
import { heroData, mentorsData } from "../../constants/index";
import { FiSearch } from "react-icons/fi";

export default function Hero() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="py-20 md:pt-20 bg-gradient-to-r from-blue-100 to-purple-200">
        {/* Header */}
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex gap-2 items-center mb-4 md:mb-6 rounded-full px-4 py-2 bg-white mx-auto">
            <img src={heroData.header.learnFromLogo} alt="LearnFromLogo" />
            <h2 className="font-semibold">Learn From the Top Experts</h2>
          </div>
          <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6">
            Building Futures Together By Empowering Minds{" "}
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Join us in shaping a brighter future by nurturing potential,
            empowering minds, and fostering growth through education and
            collaboration.
          </p>
        </div>

        {/* Hero Images + Description */}
        <div className="container mx-auto px-4 flex flex-col items-center gap-6 md:flex-row md:justify-evenly md:items-center mt-10">
          <img
            src={heroData.images.left}
            alt="Hero Left"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rotate-[-30deg] blur-sm"
          />
          <p className="text-gray-600 max-w-xl text-center px-4 md:px-0">
            Empower yourself with the best mentorship and courses curated for
            your growth.
          </p>
          <img
            src={heroData.images.right}
            alt="Hero Right"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rotate-[-5deg] blur-sm"
          />
        </div>

        {/* Search Form */}
        <form className="container mx-auto px-4 max-w-md mt-10">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="search"
              placeholder="Search..."
              className="w-full p-3 pr-10 text-sm text-gray-900 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-600 transition-colors duration-300"
            >
              <FiSearch className="w-5 h-5" />
            </button>
          </div>
        </form>

        {/* Simple Mentors Grid */}
        <div className="container mx-auto px-4 mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {mentorsData.map((mentor) => (
            <img
              key={mentor.id}
              src={mentor.image}
              alt={mentor.name}
              className="w-full rounded-full object-cover"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
