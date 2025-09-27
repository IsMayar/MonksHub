import React from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

export default function FeaturedCourseCard({
  course = null, // default to null
  courseFooterIcons = {},
  link = "/courses",
}) {
  if (!course) return null; // prevent crash if no course

  return (
    <Link to={link}>
      <div className="container mx-auto px-4 p-6 grid grid-cols-1 md:grid-cols-2 gap-10 border rounded-3xl">
        <img src={course.image} alt={course.title} className="rounded-2xl" />

        <div className="py-10">
          <div className="flex justify-between mb-6">
            <button className="bg-gray-100 px-3 py-2 rounded-md">
              {course.category}
            </button>
            {course.isPopular && (
              <button className="flex gap-2 px-4 py-2 rounded-full items-center bg-gray-900 text-white">
                <img
                  src={courseFooterIcons.popular}
                  alt="Popular"
                  className="w-6 h-5 rounded-full"
                />
                <span>Popular</span>
              </button>
            )}
          </div>

          <h1 className="text-3xl font-semibold">{course.title}</h1>
          <p className="text-gray-600 my-4">{course.description}</p>

          <div className="flex justify-between items-center border-b border-gray-400 pb-6">
            <div className="flex gap-2 items-center">
              <img src={courseFooterIcons.lectures} alt="" />
              <span className="text-gray-600">{course.lectures} lectures</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={courseFooterIcons.timeSpan} alt="" />
              <span className="text-gray-600">{course.duration}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4">
            <h1 className="text-3xl font-semibold text-green-600">
              {course.price}
            </h1>
            <CustomButton
              text="View Details"
              onClick={() => alert(`Viewing details of ${course.title}`)}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
