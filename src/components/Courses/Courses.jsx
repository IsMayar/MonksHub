import React from "react";
import CategoryButtons from "../Common/CategoryButtons";
import OtherCourses from "../Common/OtherCourses";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";
import FeaturedCourseCard from "../Common/FeaturedCourseCard";
import Join from "../Common/Join";
import { ExpertiseLeftEnd } from "../../assets/images";
import CustomButton from "../Common/CustomButton";
import {
  featuredCourse,
  categoriesData,
  CourseFooterData,
} from "../../constants";
import BestTalent from "../Common/BestTalent";
import SectionHeader from "../Common/SectionHeader";
export default function Courses({
  title = "Explore Our All Courses",
  courses = [],
  rows = 1,
  categories = [],
  showCategories = true,
  featuredCourseProp = featuredCourse, // ✅ use a different prop name
  courseFooterIcons = CourseFooterData.icons,
}) {
  const coursesToShow = courses.slice(0, rows * 3);

  return (
    <div>
      <SectionHeader title="We Offer an Outstanding Learning Experience" />

      {/* Featured Course */}
      <FeaturedCourseCard
        course={featuredCourseProp}
        courseFooterIcons={courseFooterIcons}
        link="/courses/featured"
      />

      {/* Header */}
      <header className="container mx-auto px-4 pb-10 text-cente pt-20  ">
        <h1 className="text-2xl md:text-5xl font-bold max-w-2xl mx-auto mb-8 md:mb-14">
          {title}
        </h1>

        <CategoryButtons
          show={showCategories}
          categories={categories.length ? categories : categoriesData}
        />
      </header>

      <div className="pb-20">
        {/* Other Courses */}
        <OtherCourses
          courses={coursesToShow}
          courseFooterIcons={courseFooterIcons}
        />
        <div className="flex justify-center ">
          <CustomButton
            text="View All Courses"
            onClick={() => alert("View All Courses")}
          />
        </div>
      </div>

      <BestTalent />
      <div className="py-20">
        <TestimonialCarousel />
      </div>
      <Join />
    </div>
  );
}
