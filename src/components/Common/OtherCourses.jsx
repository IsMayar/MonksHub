// src/components/Common/OtherCourses.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function OtherCourses({ courses = [], courseFooterIcons = {} }) {
  if (!courses || courses.length === 0) return null;

  return (
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-3 mt-2 pb-6">
      {courses.map((course) => (
        <Link to="/" key={course.id}>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <img
              className="rounded-t-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
              src={course.image}
              alt={course.title}
            />
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
                  <img src={courseFooterIcons.timeSpan} alt="" />
                  <span className="text-gray-600">{course.duration}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={courseFooterIcons.lectures} alt="" />
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
  );
}
