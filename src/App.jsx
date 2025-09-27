import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  categoriesData,
  coursesData,
  CourseFooterData,
} from "./constants/index";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer";
import Courses from "./components/Courses/Courses";
import Mentors from "./components/Home/Mentors";
import MentorDetailsWrapper from "./components/Home/MentorDetailsWrapper";
import Blogs from "./components/Blogs/Blogs";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/courses"
            element={
              <Courses
                title="Explore Our All Courses"
                courses={coursesData}
                rows={3}
                categories={categoriesData}
                showCategories={true}
                courseFooterIcons={CourseFooterData.icons}
              />
            }
          />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentor/:id" element={<MentorDetailsWrapper />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
