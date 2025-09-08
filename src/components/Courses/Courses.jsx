import React from "react";
import { featuredCourse, coursesData } from "../../constants/courses_constants";
import { categoriesData } from "../../constants/categories_constants";
import { heroData } from "../../constants/hero_constants";

export default function Courses() {
  return (
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
              <span className="text-gray-600">{featuredCourse.duration}</span>
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

      {/* Other Courses */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
        {coursesData.map((course) => (
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
              <h1 className="text-2xl font-semibold mb-3">{course.title}</h1>
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
  );
}
