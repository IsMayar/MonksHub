import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaUser } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

// Reusable MentorDetails Component
export default function MentorDetails({
  image,
  socials = [],
  name,
  role,
  courses,
  students,
  biography,
  mentoringExperience,
  experience,
  credentials,
  specialty,
  mentorshipApproach,
  availableCourses = [],
}) {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-2xl p-6">
        {/* Left Side - Image + Social Icons */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src={image}
            alt={name}
            className="rounded-2xl w-64 h-64 object-cover shadow-md"
          />
          <div className="flex gap-4 mt-4">
            {socials.map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Mentor Info */}
        <div className="md:w-2/3 space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-600">{role}</p>
            <div className="flex gap-6 mt-3 text-sm text-gray-700">
              <span>{courses} Courses</span>
              <span className="flex items-center gap-2">
                <FaUser /> {students}+ Students
              </span>
            </div>
          </div>

          {/* Biography */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Biography</h3>
            <p className="text-gray-700">{biography}</p>
          </div>

          {/* Mentoring & Experience */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Mentoring & Experience
            </h3>
            <p className="text-gray-700">{mentoringExperience}</p>
          </div>

          {/* Details List */}
          <div className="space-y-2">
            <p>
              <strong>Experience:</strong> {experience}
            </p>
            <p>
              <strong>Credentials:</strong> {credentials}
            </p>
            <p>
              <strong>Specialty:</strong> {specialty}
            </p>
            <p>
              <strong>Mentorship Approach:</strong> {mentorshipApproach}
            </p>
          </div>

          {/* Available Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Available Courses</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {availableCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl shadow-sm p-4 hover:shadow-lg transition"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-lg h-40 w-full object-cover mb-3"
                  />
                  <h4 className="font-bold text-lg">{course.title}</h4>
                  <p className="text-sm text-gray-600">{course.duration}</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-600">
                    <HiOutlineDocumentText /> {course.lectures} lectures
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={course.mentorImage}
                        alt={course.mentorName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm">{course.mentorName}</span>
                    </div>
                    <span className="font-semibold">${course.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
