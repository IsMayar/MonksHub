import React from "react";

import Hero from "./Hero.jsx";
import NextGeneration from "./NextGeneration.jsx";
import BecomeInDemand from "./BecomeInDemand.jsx";
import {
  categoriesData,
  featuredCourse,
  coursesData,
  CourseFooterData,
} from "../../constants/index.js";
import WhyChooseMasterhubSection from "./WhyChooseMasterhubSection.jsx";
import TakeYourExpertiseSection from "./TakeYourExpertiseSection.jsx";
import SuccessfulGraduates from "./SuccessfulGraduates.jsx";
import FAQsSection from "./FAQsSection.jsx";
import EmpowerYourJourney from "../Common/EmpowerYourJourney.jsx";
import Join from "../Common/Join.jsx";
export default function Home() {
  return (
    <>
      <Hero />
      <NextGeneration />
      <BecomeInDemand
        title="Become In Demand Today!"
        courses={coursesData}
        rows={1}
        categories={categoriesData}
        featuredCourse={featuredCourse}
        courseFooterIcons={CourseFooterData.icons}
      />
      <WhyChooseMasterhubSection />
      <TakeYourExpertiseSection />
      <SuccessfulGraduates />
      <FAQsSection />
      <EmpowerYourJourney />
      <Join />
    </>
  );
}
