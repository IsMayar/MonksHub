import React from "react";
import {
  insight1,
  insight2,
  insight3,
  insight4,
  insight5,
  insight6,
} from "../../assets/images";
import {
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import CustomButton from "../Common/CustomButton";

export default function ExploreAllInsights() {
  const insightsData = [
    {
      img: insight1,
      author: "Michael Steiner",
      time: "15 min",
      title: "Top 5 skills to stay competitive in the tech industry",
    },
    {
      img: insight2,
      author: "William H",
      time: "15 min",
      title: "Effective networking strategies to boost career success",
    },
    {
      img: insight3,
      author: "Ethan S",
      time: "15 min",
      title: "Building a strong LinkedIn profile that attracts opportunities",
    },
    {
      img: insight4,
      author: "James R",
      time: "15 min",
      title: "5 High-impact communication skills for every professional",
    },
    {
      img: insight5,
      author: "Michael Steiner",
      time: "15 min",
      title: "Top 10 career mistakes and how to avoid them",
    },
    {
      img: insight6,
      author: "William H",
      time: "15 min",
      title: "Comprehensive guide to thriving in remote work life",
    },
  ];

  const categories = [
    "All Categories",
    "Career Development",
    "Personal Growth",
    "Skill Building",
    "Technology Trends",
    "Industry Insights",
  ];

  const recentBlogs = [
    {
      img: insight1,
      title: "Techniques for success",
      desc: "An overview of essential project management methodologies.",
    },
    {
      img: insight2,
      title: "Training and education",
      desc: "Empowering growth through structured learning and skill.",
    },
    {
      img: insight3,
      title: "Time management tips",
      desc: "Improve your productivity with proven time-management.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-center pb-14">
        Explore All Insights
      </h1>
      <div className="bg-white rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left content - Insights */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {insightsData.map((insight, idx) => (
              <article
                key={insight.title + idx}
                className="rounded overflow-hidden w-full"
              >
                <img
                  src={insight.img}
                  alt={insight.title}
                  className="w-full h-56 object-cover"
                />
                <div className="pt-2">
                  <h3 className="font-semibold text-base">{insight.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {insight.author} · {insight.time}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <CustomButton text="View More Blogs" />
          </div>
        </div>

        {/* Right Sidebar - Categories + Recent Blogs + Follow Us */}
        <aside className="md:col-span-1">
          {/* Categories */}
          <h2 className="font-bold text-xl mb-3">Categories</h2>
          <ul className="list-none mb-8">
            {categories.map((cat, i) => (
              <li key={cat + i}>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">
                  {cat}
                </button>
              </li>
            ))}
          </ul>

          {/* Recent Blogs */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">Recent Blogs</h2>
            <div className="space-y-6">
              {recentBlogs.map((post, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{post.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{post.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow us:</h2>
            <div className="flex gap-4 text-2xl text-gray-600">
              <a href="#" aria-label="YouTube" className="hover:text-red-600">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
