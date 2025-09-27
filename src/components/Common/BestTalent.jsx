import React from "react";
import { teamMembers } from "../../constants/index";
import CustomButton from "./CustomButton";
const TeamCard = ({ member }) => {
  return (
    <div
      className={`relative group flex flex-col items-center justify-between rounded-full  ${member.bg} shadow-md w-64 h-[420px]`}
    >
      {/* Name + Role */}
      <div className="text-center mt-4 p-4">
        <h2 className="text-lg font-bold text-gray-900">{member.name}</h2>
        <p className="text-gray-600">{member.role}</p>
      </div>

      {/* Image */}
      <div className="w-full h-auto overflow-hidden rounded-full">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Social Icons */}
      {member.socials.length > 0 && (
        <div className="absolute bottom-10 flex gap-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {member.socials.map((Icon, index) => (
            <div
              key={index}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-700 bg-white hover:bg-gray-100 cursor-pointer transition"
            >
              <Icon className="text-lg" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function TeamSection() {
  return (
    <section className="bg-gray-900 py-16">
      {/* ✅ Added horizontal padding */}
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <header className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 py-6 sm:py-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left max-w-full md:max-w-2xl leading-snug">
            Learn from the Best Talent in the Industry
          </h1>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-start">
            <CustomButton text="View All Courses" variant="bestTalent" />
          </div>
        </header>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className={idx % 2 === 0 ? "mt-0" : "mt-16"}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
