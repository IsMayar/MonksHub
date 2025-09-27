import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import SectionHeader from "../Common/SectionHeader";
import {
  MentorsCoursesData,
  coursesData,
  categoriesData,
  CourseFooterData,
} from "../../constants";
import CustomButton from "../Common/CustomButton";
import OtherCourses from "../Common/OtherCourses";
import CategoryButtons from "../Common/CategoryButtons";
import TestimonialCarousel from "../Courses/TestimonialCarousel/TestimonialCarousel";
import Join from "../Common/Join";

export default function Mentors({
  title = "Explore Our All Courses",
  courses = [],
  rows = 3,
  categories = [],
  showCategories = true,
  courseFooterIcons = CourseFooterData.icons,
}) {
  const coursesToShow = (courses.length ? courses : coursesData).slice(
    0,
    rows * 3
  );

  return (
    <section className="container mx-auto px-4">
      <SectionHeader title="Meet Our Industry’s Leading Expert Mentors" />

      {/* Mentors Grid */}
      <div className="pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MentorsCoursesData.map((mentor, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-64 sm:h-72 md:h-80 group"
            >
              <div className="relative">
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  className="w-full h-36 sm:h-44 md:h-60 object-cover"
                />

                {/* Social icons */}
                <div className="absolute bottom-3 left-0 w-full flex justify-center gap-3 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              <div className="p-3 text-center flex-shrink-0">
                <h2 className="text-md sm:text-lg font-bold text-gray-800">
                  {mentor.name}
                </h2>
                <p className="text-sm text-gray-500">{mentor.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center py-10">
          <CustomButton
            text="View More Members"
            onClick={() => alert("View More Members")}
          />
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-gray-50">
        <header className="container mx-auto px-4 pb-10 text-center">
          <h1 className="text-2xl md:text-5xl font-bold max-w-2xl mx-auto mb-8 md:mb-14">
            {title}
          </h1>
          <CategoryButtons
            show={showCategories}
            categories={categories.length ? categories : categoriesData}
          />
        </header>

        <div className="pb-20">
          <OtherCourses
            courses={coursesToShow}
            courseFooterIcons={courseFooterIcons}
          />
          <div className="flex justify-center mt-8">
            <CustomButton
              text="View All Courses"
              onClick={() => alert("View All Courses")}
            />
          </div>
        </div>
      </div>

      <TestimonialCarousel />
      <Join />
    </section>
  );
}
