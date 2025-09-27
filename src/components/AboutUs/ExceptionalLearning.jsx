import React from "react";
import { FaArrowUp, FaCheckCircle } from "react-icons/fa";
import { ExceptionalLearn1 } from "../../assets/images";
import CustomButton from "../Common/CustomButton";

export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image with overlay */}
        <div className="relative w-full md:p-10">
          <img
            src={ExceptionalLearn1}
            alt="Features"
            className="w-full h-[500px] object-cover rounded-xl shadow-lg"
          />

          {/* Overlay Div */}
          <div className="absolute bottom-14 right-14 w-56 bg-white bg-opacity-90 p-6 rounded-xl shadow-lg space-y-2">
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-semibold">
              Average Class Completion Rate
            </h3>

            <div className="space-y-4">
              <div className="flex gap-1 items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
                <FaArrowUp className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-green-500">65+</span>
              </div>
              <div className="flex items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                <FaCheckCircle className="text-green-500 mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                95%
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            We Ensure an Exceptional Learning Experience
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            We guarantee an exceptional learning experience with expert
            instructors, interactive lessons, and hands-on opportunities
            designed to ensure student success and growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                100,000+
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2">
                Students effectively enhanced digital skills using our platform.
              </p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                20,000+
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2">
                Students have built successful careers in various tech
                companies.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20">
            <CustomButton text="Explore Courses" />
          </div>
        </div>
      </div>
    </section>
  );
}
