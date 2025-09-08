import React from "react";
import { heroData, mentorsData } from "../../constants/hero_constants";
import {
  mentorsText,
  DetailedMentorsData,
} from "../../constants/mentors_constants";
import { categoriesData } from "../../constants/categories_constants";
import { featuredCourse, coursesData } from "../../constants/courses_constants";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-20 md:pt-20 bg-gradient-to-r from-blue-100 to-purple-200">
        {/* Header */}
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex gap-2 items-center mb-4 md:mb-6 rounded-full px-4 py-2 bg-white mx-auto">
            <img src={heroData.header.learnFromLogo} alt="LearnFromLogo" />
            <h2 className="font-semibold">{heroData.header.learnFromText}</h2>
          </div>
          <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6">
            {heroData.header.title}
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            {heroData.header.subtitle}
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
              className="w-full p-3 pr-10 text-sm text-gray-900 rounded-full bg-gray-100 focus:outline-none focus:ring-0"
              required
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4-4m0-7a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
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

      {/* DETAILED MENTORS SECTION */}
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
            <Link to="/mentors">
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
            </Link>
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

      {/* COURSES SECTION */}
      <section className="py-20">
        <header className="container mx-auto px-4 pb-10 text-center">
          <h1 className="text-2xl md:text-5xl font-bold max-w-2xl mx-auto mb-8 md:mb-14">
            Become In Demand On the Job Market Today!
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            {categoriesData.map((cat) => (
              <button
                key={cat.id}
                className="flex items-center gap-2 hover:bg-green-700 border px-4 py-3 rounded-full"
              >
                <img src={cat.icon} alt={cat.label} className="w-5 h-5" />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </header>

        {/* Featured Course */}
        <Link to="/courses">
          <div className="container mx-auto px-4 p-6 grid grid-cols-1 md:grid-cols-2 gap-10 border rounded-3xl">
            <img src={featuredCourse.image} alt={featuredCourse.title} />
            <div className="py-10">
              <div className="flex justify-between mb-6">
                <button className="bg-gray-100 px-3 py-2 rounded-md">
                  {featuredCourse.category}
                </button>
                {featuredCourse.isPopular && (
                  <button className="flex gap-2 px-4 py-2 rounded-full items-center bg-gray-900 text-white">
                    <img
                      src={heroData.icons.popular}
                      alt=""
                      className="w-6 h-5 rounded-full"
                    />
                    <span>Popular</span>
                  </button>
                )}
              </div>
              <h1 className="text-3xl font-semibold">{featuredCourse.title}</h1>
              <p className="text-gray-600 my-4">{featuredCourse.description}</p>

              <div className="flex justify-between items-center border-b border-gray-400 pb-6">
                <div className="flex gap-2 items-center">
                  <img src={heroData.icons.lectures} alt="" />
                  <span className="text-gray-600">
                    {featuredCourse.lectures} lectures
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={heroData.icons.timeSpan} alt="" />
                  <span className="text-gray-600">
                    {featuredCourse.duration}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <h1 className="text-3xl font-semibold text-green-600">
                  {featuredCourse.price}
                </h1>
                <button className="group flex items-center gap-3 rounded-full border border-gray-600 font-medium pl-4 pr-1 py-1 hover:bg-emerald-600 transition-colors">
                  <span>View Details</span>
                  <span className="flex items-center justify-center border border-gray-600 bg-gray-100 w-10 h-10 group-hover:bg-white rounded-full -rotate-45 transition group-hover:rotate-0 duration-600">
                    <img
                      src={heroData.icons.arrowRight}
                      alt="arrow"
                      className="w-5 h-5"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Link>

        {/* Other Courses */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
          {coursesData.map((course) => (
            <Link to="/courses">
              <div
                key={course.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
                    src={course.image}
                    alt={course.title}
                  />
                </a>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <button className="px-4 py-2 font-semibold bg-gray-100 rounded-lg">
                      {course.category}
                    </button>
                    <span className="text-xl font-semibold text-green-600">
                      {course.price}
                    </span>
                  </div>
                  <h1 className="text-2xl font-semibold mb-3">
                    {course.title}
                  </h1>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img src={heroData.icons.timeSpan} alt="" />
                      <span className="text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img src={heroData.icons.lectures} alt="" />
                      <span className="text-gray-600">
                        {course.lectures} lectures
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button className="group flex justify-between items-center gap-3 rounded-full border border-gray-600 font-medium pl-4 pr-1 py-1 text-white bg-gray-900 hover:bg-emerald-600 transition-colors mx-auto mt-6">
          <span>View All Courses</span>
          <span className="flex items-center justify-center border border-gray-600 bg-gray-100 w-10 h-10 group-hover:bg-white rounded-full -rotate-45 transition-transform duration-500 group-hover:rotate-0">
            <img
              src={heroData.icons.arrowRight}
              alt="arrow"
              className="w-5 h-5"
            />
          </span>
        </button>
      </section>
    </>
  );
}
