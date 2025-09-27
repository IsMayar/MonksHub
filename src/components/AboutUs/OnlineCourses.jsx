import React from "react";
import { AboutusBg, AboutusStar } from "../../assets/images";
export default function OnlineCourses() {
  return (
    <div>
      <section className="relative w-full h-[500px]">
        {/* Background Image */}
        <img
          src={AboutusBg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute top-1/4 right-[200px] flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm max-w-md px-8 py-10 rounded-2xl shadow-lg">
            {/* Badge */}
            <div className="flex justify-between items-center">
              <h1 className="bg-green-100 text-7xl font-bold px-4 py-4 rounded-full mb-4">
                10+
              </h1>
              <img src={AboutusStar} alt="" />
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Years of Experience
            </h2>

            {/* Description */}
            <p className="text-gray-800 text-sm">
              Leveraging 10+ years in the field, our online courses offer
              expertly developed content, designed to support learners with
              engaging and impactful education.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
