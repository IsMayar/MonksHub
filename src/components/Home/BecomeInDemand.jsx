import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Common/CustomButton";
import CategoryButtons from "../Common/CategoryButtons";
import OtherCourses from "../Common/OtherCourses";
import { CourseFooterData } from "../../constants/index";
import FeaturedCourseCard from "../Common/FeaturedCourseCard";

export default function BecomeInDemand({
  title,
  courses = [],
  rows = 1,
  categories = [],
  showCategories = true,
  featuredCourse = null,
  courseFooterIcons = CourseFooterData.icons, // set default for consistency
}) {
  const coursesToShow = courses.slice(0, rows * 3);

  return (
    <section className="py-20">
      {/* Header */}
      <header className="container mx-auto px-4 pb-10 text-center">
        <h1 className="text-2xl md:text-5xl font-bold max-w-2xl mx-auto mb-8 md:mb-14">
          {title}
        </h1>
        <CategoryButtons show={showCategories} categories={categories} />
      </header>

      {/* Featured Course */}

      <FeaturedCourseCard
        course={featuredCourse}
        courseFooterIcons={courseFooterIcons}
      />

      {/* Other Courses */}
      <OtherCourses
        courses={coursesToShow}
        courseFooterIcons={courseFooterIcons}
      />

      <div className="flex justify-center mt-10">
        <CustomButton
          text="View All Courses"
          onClick={() => alert("View All Courses")}
        />
      </div>
    </section>
  );
}
