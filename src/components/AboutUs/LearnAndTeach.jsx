import React from "react";
import { Teach1, Learn1 } from "../../assets/images";
import CustomButton from "../Common/CustomButton";
export default function LearnAndTeach() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-100 to-indigo-100 py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left side - Cards */}
        <div className="space-y-8">
          {/* Become an Instructor */}
          <div className="bg-white p-8 rounded-xl shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-700">
              Become an Instructor?
            </h2>
            <p className="text-gray-700 mb-6">
              Join us to share your expertise, inspire learners, and shape the
              future of education together.
            </p>
            <CustomButton text="Join with Us" />
          </div>

          {/* Get Online Courses */}
          <div className="bg-white p-8 rounded-xl shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <h2 className="text-3xl font-bold mb-4 text-indigo-700">
              Get Online Courses
            </h2>
            <p className="text-gray-700 mb-6">
              Join as a student to access online courses, gain in-demand skills,
              and build a strong foundation for future success.
            </p>
            <CustomButton text="Start Learning" />
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={Teach1}
              alt="Learn and Teach"
              className="rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
