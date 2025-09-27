import React from "react";
import { ExpertiseLeftEnd } from "../../assets/images";

const SectionHeader = ({ title }) => {
  return (
    <header className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-2 py-12 md:py-20 gap-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-full md:max-w-5xl text-center md:text-left">
        {title}
      </h1>
      <img
        src={ExpertiseLeftEnd}
        alt="Expertise Illustration"
        className="hidden md:block w-auto max-w-full"
      />
    </header>
  );
};

export default SectionHeader;
