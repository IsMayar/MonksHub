import React from "react";
import SectionHeader from "../Common/SectionHeader";
import TakeYourExpertiseSection from "../Home/TakeYourExpertiseSection";
import OnlineCourses from "./OnlineCourses";
import BestTalent from "../Common/BestTalent";
import FAQs from "../Home/FAQsSection";
import Join from "../Common/Join";
import Achievements from "./Achievements";
import LearnAndTeach from "./LearnAndTeach";
import ExceptionalLearning from "./ExceptionalLearning";
export default function AboutUs() {
  return (
    <div>
      <SectionHeader title="Providing Unrivaled Quality in Online Courses " />
      <OnlineCourses />
      <TakeYourExpertiseSection />
      <Achievements />
      <LearnAndTeach />
      <ExceptionalLearning />
      <BestTalent />
      <FAQs />
      <Join />
    </div>
  );
}
